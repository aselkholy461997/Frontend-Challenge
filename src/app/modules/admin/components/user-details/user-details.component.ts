import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from './../../../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  type: 'update' | 'add';
  user: User;

  constructor(
    private dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: User
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.type = 'update';
      this.user = this.data;
    } else {
      this.type = 'add';
      this.user = new User(null, null);
    }
  }

  onConfirm(): void {
    this.dialogRef.close(this.user);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
