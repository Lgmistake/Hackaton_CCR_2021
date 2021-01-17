
import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material';
import { DialogOpcoesComponent } from './dialogOpcoes.component';

@Injectable({
  providedIn: 'root'
})
export class DialogOpcoesService {
  constructor(public dialog: MatDialog) {}

  mostrarOpcoes(titulo, mensagem, opcao1, opcao2) {
    this.dialog.open(DialogOpcoesComponent, {
      data: {
        title: titulo,
        message: mensagem,
        option1: opcao1,
        option2: opcao2
      }
    });
  }
}
