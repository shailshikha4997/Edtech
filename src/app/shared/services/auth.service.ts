import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { User, UserResponse } from 'src/app/models/interface/user.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL
  constructor(private http:HttpClient) { }


  registerUser(user:User): Observable<User> {
    // console.log('registerUser '+this.API_URL + '/userRoute/register')
    return this.http.post<User>(this.API_URL + '/userRoute/register',user);
  }
}
