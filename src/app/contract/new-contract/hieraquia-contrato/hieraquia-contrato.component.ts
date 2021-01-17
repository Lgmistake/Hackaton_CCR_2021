import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { AddNewContractComponent } from '../add-new-contract/add-new-contract.component';
import { DialogComponent } from 'src/shared/dialogs/dialog/dialog.component';
import { Document } from 'src/app/class/Document';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/config/notification.service';
import { ContractService } from '../../contract.service';

@Component({
  selector: 'app-hieraquia-contrato',
  templateUrl: './hieraquia-contrato.component.html',
  styleUrls: ['./hieraquia-contrato.component.scss']
})
export class HieraquiaContratoComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private alertService: NotificationService,
    private contractService: ContractService
  ) {}

  @Input() blocks: Document[];
  @Input() edit: boolean;
  @Input() document: Document;


  ngOnInit() {
    if (this.document !== null && this.document !== undefined) {
      this.document.blocks = [];
      this.blocks = [];
    }
  }

  editBlock(element) {
    const index = this.blocks.indexOf(element);
    if (index > -1) {
      this.dialog
        .open(AddNewContractComponent, {
          minWidth: '50%',
          data: element
        })
        .afterClosed()
        .subscribe(result => {
          if (result) {
            this.blocks[index] = result;
            this.contractService.updateBlock(result).subscribe(block => {});
          }
        });
    }
  }

  deleteBlock(element) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: 'Deseja realmente excluir esse bloco?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.blocks.indexOf(element);
        if (index > -1) {
          this.blocks.splice(index, 1);
        }
      }
    });
  }

  addBlock(document) {
    this.dialog
      .open(AddNewContractComponent, {
        minWidth: '400px'
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          if (document === null || document === undefined) {
            document = this.document;
          } else {
            result.parent = document;
          }
          this.contractService.createBlock(result).subscribe(block => {
            if (document.blocks === null || document.blocks === undefined) {
              document.blocks = [];
            }
            document.blocks.push(block);
            const i = this.blocks.findIndex(elem => elem.id === document.id);
            i > -1 ? (this.blocks[i] = document) : this.blocks.push(block);
          });
          this.alertService.showSuccess('Bloco salvo com sucesso');
        }
      });
  }
}
