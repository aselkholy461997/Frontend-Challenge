import { User } from './../../../../models/user.model';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
  }
}
