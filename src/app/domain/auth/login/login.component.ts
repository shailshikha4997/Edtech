import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login!:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createLogin();
  }

  createLogin(){
    this.login = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit(){
    console.log(this.login.value)
  }

}
