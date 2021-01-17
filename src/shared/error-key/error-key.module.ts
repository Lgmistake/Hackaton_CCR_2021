import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ErrorKeyPipe } from './error-key.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorKeyPipe],
  exports: [ErrorKeyPipe],
  providers: [DatePipe]
})
export class ErrorKeyModule {}
