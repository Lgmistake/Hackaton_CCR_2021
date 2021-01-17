import { BlockType } from './../../class/BlockType';
import { NotificationService } from './../../config/notification.service';
import { AddNewContractComponent } from './add-new-contract/add-new-contract.component';
import { DialogComponent } from 'src/shared/dialogs/dialog/dialog.component';

import { ContractService } from './../contract.service';
import { Block } from './../../class/Block';
import { Document } from './../../class/Document';
import {
  MatDialog,
  MatVerticalStepper,
  MAT_DIALOG_DATA
} from '@angular/material';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  Inject
} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.scss']
})
export class NewContractComponent implements OnInit, OnChanges {
  formulario: FormGroup;
  formularioHierar: FormGroup;

  @Output() blocks = new EventEmitter<any>();
  @Input() blocksEdit: Block[];
  datas: Block[] = [];
  blockTypes: BlockType[] = [];
  document: Document;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private contractService: ContractService,
    private alertService: NotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.mountForm();
    this.searchBlockType();
  }

  saveContract() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.document = this.formulario.value;
    this.contractService.createDocument(this.document).subscribe(result => {
      this.document = result;
    });
    this.submitted = false;
    this.formulario.disable();
    this.alertService.showSuccess('Documento salvo com sucesso');
  }

  async searchBlockType() {
    const blockTypes = await this.contractService
      .searchBlockTypes()
      .toPromise();
    this.blockTypes = blockTypes;
  }

  mountForm() {
    this.formulario = this.fb.group({
      contractNumber: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      beginDate: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
      version: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      publico: new FormControl('', [Validators.required])
    });
  }

  // editBlock(element) {
  //   const index = this.datas.indexOf(element);
  //   if (index > -1) {
  //     this.dialog
  //       .open(AddNewContractComponent, {
  //         minWidth: '50%',
  //         data: element
  //       })
  //       .afterClosed()
  //       .subscribe(result => {
  //         if (result) {
  //           this.datas[index] = result;
  //           this.contractService.updateBlock(result).subscribe(block => {});
  //         }
  //       });
  //   }
  // }

  // deleteBlock(element) {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     data: {
  //       message: 'Deseja realmente excluir esse bloco?'
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       const index = this.datas.indexOf(element);
  //       if (index > -1) {
  //         this.datas.splice(index, 1);
  //       }
  //     }
  //   });
  // }

  // addBlock(document) {
  //   this.dialog
  //     .open(AddNewContractComponent, {
  //       minWidth: '400px'
  //     })
  //     .afterClosed()
  //     .subscribe(result => {
  //       if (result) {
  //         if (document === null || document === undefined) {
  //           document = this.document;
  //         }
  //         result.parent = document;
  //         this.contractService.createBlock(result).subscribe(block => {
  //           if (this.document.blocks === null || this.document.blocks === undefined) {
  //             this.document.blocks = [];
  //           }
  //           this.document.blocks.push(block);
  //         });
  //         this.alertService.showSuccess('Bloco salvo com sucesso');
  //       }
  //     });
  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.document);
    this.mountForm();
  }
}
