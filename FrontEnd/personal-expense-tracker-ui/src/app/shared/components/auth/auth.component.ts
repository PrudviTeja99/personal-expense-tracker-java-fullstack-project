import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private router:Router,private route: ActivatedRoute,private authService: AuthService){}

  ngOnInit(){
    this.route.queryParamMap.subscribe({
      next: params=>{
        const code = params.get('code');
        console.log(code);
        if(code){
          //make api call to keycloak to fetch token
          //call handle call back method
          this.authService.handleCallBack(code);
        }
        else{
          //make api call to keycloak to fetch code
          //call login method
          this.authService.login();
        }
      },
      error: error=>{
        console.error("Unable to fetch code !!");
        //make api call to keycloak to fetch code
        //call login method
        this.authService.login();
      }
    });
  }

  ngOnDestroy(){
  }
}
