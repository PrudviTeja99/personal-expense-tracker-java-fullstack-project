import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

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

  logout(){
    const logoutURL = `${environment.keycloak.url}/realms/${environment.keycloak.realm}/protocol/openid-connect/logout`;
    const refreshToken = this.fetchRefreshToken();
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    const body = new URLSearchParams({
      'client_id': environment.keycloak.clientId,
      'client_secret': environment.keycloak.clientSecret,
      'refresh_token': `${refreshToken}`
    });
    this.http.post(logoutURL,body.toString(),options).subscribe({
      next: (data)=>{
        this.clearUserCreds();
        this.router.navigate(['/auth']);
        console.log("Successfully logged out !!");
      },
      error: (error)=>{
        console.error("Unable to logout !!");
      }
    });
  }

  clearUserCreds(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
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
        this.saveRefreshToken(data.refresh_token);
        this.router.navigate(['/overview']);
      },
      error: (error)=>{
        console.error("Unable to fetch token !!", error);
        this.router.navigate(['/auth'])
      }
    });
  }

  refreshToken(){
    const tokenURL = `${environment.keycloak.url}/realms/${environment.keycloak.realm}/protocol/openid-connect/token`;
    const refreshToken = this.fetchRefreshToken();
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    const body = new URLSearchParams({
      'grant_type':'refresh_token',
      'refresh_token': `${refreshToken}`,
      'client_id': environment.keycloak.clientId,
      'client_secret': environment.keycloak.clientSecret
    });

    return this.http.post(tokenURL,body.toString(),options).pipe(
      map((response:any)=>{
        this.saveToken(response.access_token);
        this.saveRefreshToken(response.refresh_token);
        return response;
      })
    );
  }

  saveToken(token : string){
    return localStorage.setItem("access_token",token);
  }
  saveRefreshToken(refreshToken:string){
    return localStorage.setItem('refresh_token',refreshToken)
  }

  fetchToken(){
    return localStorage.getItem("access_token");
  }
  fetchRefreshToken(){
    return localStorage.getItem('refresh_token');
  }
  validateToken(): Promise<boolean> {
    const accessToken=this.fetchToken();
    if(!accessToken){
      return Promise.reject('Invalid token !!');
    }
    return Promise.resolve(true);
  }
}
