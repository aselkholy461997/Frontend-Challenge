import { UserDetailsComponent } from './../../components/user-details/user-details.component';
import { DeleteUserComponent } from './../../components/delete-user/delete-user.component';
import { AdminApiService } from './../../services/admin-api.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  currentPage: number;
  usersPerPage: number;
  totalUsers: number;
  totalPages: number;
  totalPagesArr: number[] = [];
  deletedUsersCount = 0;
  addedUsersCount = 0;

  users: User[];

  constructor(
    private adminApi: AdminApiService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.adminApi.ListUsers().subscribe((res) => {
      this.setResData(res);
    });
  }

  private setResData(res: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
  }): void {
    if (res) {
      this.currentPage = res.page;
      this.usersPerPage = res.per_page;
      this.totalUsers = res.total;
      this.totalPages = res.total_pages;
      this.totalPagesArr = [];
      for (let i = 1; i <= this.totalPages; i++) this.totalPagesArr.push(i);
      this.users = res.data;
    }
  }

  onPrevClicked(): void {
    if (this.currentPage - 1 > 0)
      this.adminApi.ListUsers(this.currentPage - 1).subscribe((res) => {
        this.setResData(res);
      });
  }

  onPageClicked(page: number): void {
    if (page !== this.currentPage)
      this.adminApi.ListUsers(page).subscribe((res) => {
        this.setResData(res);
      });
  }

  onNextClicked(): void {
    if (this.currentPage + 1 <= this.totalPages)
      this.adminApi.ListUsers(this.currentPage + 1).subscribe((res) => {
        this.setResData(res);
      });
  }

  onDeleteUser(index: number): void {
    this.matDialog
      .open(DeleteUserComponent, {
        hasBackdrop: true,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((deleteRes) => {
        if (deleteRes === 'confirm')
          this.adminApi.deleteUser(this.users[index].id).subscribe((apiRes) => {
            this.users.splice(index, 1);
            this.deletedUsersCount++;
          });
      });
  }

  onAddUser(): void {
    this.matDialog
      .open(UserDetailsComponent, {
        hasBackdrop: true,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((newUser) => {
        if (newUser)
          this.adminApi.addUser(newUser).subscribe(() => {
            this.users.push(newUser);
            this.addedUsersCount++;
          });
      });
  }

  onUpdateUser(index: number): void {
    this.matDialog
      .open(UserDetailsComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: this.users[index],
      })
      .afterClosed()
      .subscribe((updatedUser) => {
        if (updatedUser)
          this.adminApi.updateUser(updatedUser).subscribe(() => {
            this.users.splice(index, 1, updatedUser);
          });
      });
  }
}
