import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User, UserResponse } from 'src/app/models/interface/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register!: FormGroup;

  constructor(private auth: AuthService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
 this.createRegister();
  }

createRegister(){
  this.register = this.formbuilder.group({
    username:[''],
    email:[''],
    language:[''],
    experience:[''],
    password:['']
  })
}

onSubmit(){
  console.log(this.register.value)
}

registeredUser(){
this.auth.registerUser(this.register.value).subscribe((response: User)=>{
console.log(response.updatedAt)
// console.log(response)
// localStorage.setItem('_id', response.)
  })
}

}

