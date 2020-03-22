import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  allUser: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.userService.getAllUsers().subscribe(res => {
      console.log(res);
      this.allUser = res;
    });
  }
}
