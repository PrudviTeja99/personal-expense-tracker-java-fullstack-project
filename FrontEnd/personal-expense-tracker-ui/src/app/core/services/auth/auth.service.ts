import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(){

  }

  refreshToken(){

  }

  saveToken(token : string){
    return localStorage.setItem("access_token",token);
  }

  fetchToken(){
    return localStorage.getItem("access_token");
  }
  validateToken(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
