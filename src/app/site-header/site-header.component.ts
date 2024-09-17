import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
   signOutMenu :boolean =false;
  //inject user service
  constructor(private userService: UserService) { }

  //subscribe to user service
  ngOnInit(): void {

    this.userService.getUser().subscribe({
      next: (user) => { this.user = user }
    })

  }

  toggleSignOutMenu(){
     this.signOutMenu=!this.signOutMenu;
  }

  signOut(){
    this.userService.signOut();
    this.signOutMenu=false;
  }

}
