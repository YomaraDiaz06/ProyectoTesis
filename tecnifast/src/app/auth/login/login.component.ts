import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado!: string;


  myFormUser=new FormGroup({
    usuarioF: new FormControl('',[Validators.required]),
      passwordF: new FormControl('',[Validators.required])

  })

  private formSubmitAttempt: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 loginUser(){

  }


}
