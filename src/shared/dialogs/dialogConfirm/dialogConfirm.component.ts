import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-basic',
  templateUrl: 'dialogConfirm.component.html',
  styleUrls: ['./dialogConfirm.component.scss']
})
export class DialogConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
