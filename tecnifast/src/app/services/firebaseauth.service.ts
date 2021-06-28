import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token: string | undefined;
  user:any;
  public currentUser: any;
  

  constructor(private fAuth:AngularFireAuth, private router:Router, private firestore:AngularFirestore) { }


  login(email: string, password: string) {
    this.fAuth.signInWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log(response);
                this.firestore.collection("Usuarios").ref.where("username", "==", response.user?.email).onSnapshot(snap =>{
                  snap.forEach(userRef =>{
                    console.log("userRef", userRef.data());
                    console.log("userRef", userRef.id);
                    this.currentUser = userRef.data();


                  })
                })
                this.router.navigate([''])



            }
        )
}

registerUser(email:string, password: string){
  
  return new Promise<any>((resolve, reject) => {

    this.fAuth.createUserWithEmailAndPassword(email,password)
      .then(
        res => resolve(res),
        err => reject(err))
  }
  )
}

getCurrentUser(){
  return this.fAuth.authState.pipe(first()).toPromise();
}

logout (){

  try{
  this.fAuth.signOut();
  this.loggedIn.next(false);

  }catch(error){
    console.log(error);

  }

}
}
