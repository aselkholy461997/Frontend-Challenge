import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DeleteUserComponent>) {}

  ngOnInit(): void {}

  onDelete(): void {
    this.dialogRef.close('confirm');
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
