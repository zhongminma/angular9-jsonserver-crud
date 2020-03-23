import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  createAndUpdate(user: User) {
    console.log(user);
    if(user.id !== null) { //update
      this.updateUser(user);
    } else {  // create
      this.createUser(user)
    }
  }
  createUser (u: User) {
    this.userService.createUser(u).subscribe();
  }
  updateUser (u: User) {
    this.userService.updateUser(u).subscribe();
  }
}
