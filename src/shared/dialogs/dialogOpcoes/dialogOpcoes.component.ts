import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-opcoes',
  templateUrl: 'dialogOpcoes.component.html'
})
export class DialogOpcoesComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
