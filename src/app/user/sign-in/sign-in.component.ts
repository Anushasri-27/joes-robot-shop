import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
   
  //collect data in property
  credentials : IUserCredentials = {email:'',password:''};
  SignInError : boolean = false;

  constructor(private userService : UserService,private router : Router) { }

  signIn(){
    this.SignInError=false;
    this.userService.signIn(this.credentials).subscribe({
      next : ()=>this.router.navigate(['/catalog']),
      error: ()=> (this.SignInError = true)
    })

  }

}
