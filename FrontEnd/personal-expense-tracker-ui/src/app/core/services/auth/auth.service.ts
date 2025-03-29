import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  login(){
    const authURL = `${environment.keycloak.url}/realms/${environment.keycloak.realm}/protocol/openid-connect/auth`;
    const queryParams = new URLSearchParams({
      'response_type':'code',
      'client_id': `${environment.keycloak.clientId}`,
      'redirect_uri': `${environment.keycloak.redirectUri}`
    });
    window.location.href = `${authURL}?${queryParams.toString()}`;
  }

  handleCallBack(code: string){
    const tokenURL = `${environment.keycloak.url}/realms/${environment.keycloak.realm}/protocol/openid-connect/token`;
    const body = new URLSearchParams({
      'grant_type': 'authorization_code',
      'redirect_uri': environment.keycloak.redirectUri,
      'client_id': environment.keycloak.clientId,
      'client_secret': environment.keycloak.clientSecret,
      'code': code
    });
    
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    
    this.http.post(tokenURL, body.toString(), options).subscribe({
      next: (data: any) => {
        this.saveToken(data.access_token);
        this.router.navigate(['/overview']);
      },
      error: (error)=>{
        console.error("Unable to fetch token !!", error);
        this.router.navigate(['/auth'])
      }
    });
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
    const accessToken=this.fetchToken();
    if(!accessToken){
      return Promise.reject('Invalid token !!');
    }
    return Promise.resolve(true);
  }
}
