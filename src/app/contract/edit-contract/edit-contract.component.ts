import { ActivatedRoute } from "@angular/router";
import { AddNewContractComponent } from "./../new-contract/add-new-contract/add-new-contract.component";
import { BlockType } from "../../class/BlockType";
import { NotificationService } from "../../config/notification.service";
import { DialogComponent } from "src/shared/dialogs/dialog/dialog.component";

import { ContractService } from "../contract.service";
import { Block } from "../../class/Block";
import { Document } from "../../class/Document";
import {
  MatDialog,
  MatVerticalStepper,
  MAT_DIALOG_DATA
} from "@angular/material";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
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
} from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-edit-contract",
  templateUrl: "./edit-contract.component.html",
  styleUrls: ["./edit-contract.component.scss"]
})
export class EditContractComponent implements OnInit {
  formulario: FormGroup;
  formularioHierar: FormGroup;

  @Output() blocks = new EventEmitter<any>();
  @Input() blocksEdit: Block[];
  datas: Block[] = [];
  blockTypes: BlockType[] = [];
  document: Document;
  submitted = false;
  idDocument: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private contractService: ContractService,
    private alertService: NotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idDocument = params.id ? params.id : 0;
      this.searchDocuments();  
      this.searchBlockType();
      this.mountForm();
    });
  }

  // searchDocuments() {
  //   this.contractService.findDocument(this.idDocument).subscribe(result => {
  //     this.document = result;
  //   });
  // }

  async searchDocuments() {
    const document = await this.contractService
      .findDocument(this.idDocument)
      .toPromise();
    this.document = document;
    this.mountForm();
  }
  editContract() {
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
    this.alertService.showSuccess("Documento atualizado com sucesso");
    this.mountForm();
  }

  async searchBlockType() {
    const blockTypes = await this.contractService
      .searchBlockTypes()
      .toPromise();
    this.blockTypes = blockTypes;
  }

  mountForm() {
    console.log(this.document)
    this.formulario = this.fb.group({
      contractNumber: new FormControl(
        this.document ? this.document.contractNumber : "",
        [Validators.required]
      ),
      title: new FormControl(this.document ? this.document.title : "", [
        Validators.required
      ]),
      description: new FormControl(
        this.document ? this.document.description : "",
        [Validators.required]
      ),
      beginDate: new FormControl(this.document ? this.document.beginDate : "", [
        Validators.required
      ]),
      comments: new FormControl(this.document ? this.document.comments : "", [
        Validators.required
      ]),
      version: new FormControl(this.document ? this.document.version : "", [
        Validators.required
      ]),
      endDate: new FormControl(this.document ? this.document.endDate : "", [
        Validators.required
      ]),
      publico: new FormControl(this.document ? this.document.publico : "", [
        Validators.required
      ])
    });
  }

  editBlock(element) {
    const index = this.datas.indexOf(element);
    if (index > -1) {
      this.dialog
        .open(AddNewContractComponent, {
          minWidth: "50%",
          data: element
        })
        .afterClosed()
        .subscribe(result => {
          if (result) {
            this.datas[index] = result;
            this.contractService.updateBlock(result).subscribe(block => {});
          }
        });
    }
  }

  deleteBlock(element) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: "Deseja realmente excluir esse bloco?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.datas.indexOf(element);
        if (index > -1) {
          this.datas.splice(index, 1);
        }
      }
    });
  }

  addBlock() {
    this.dialog
      .open(AddNewContractComponent, {
        minWidth: "800px"
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          result.document = this.document;
          this.contractService.createBlock(result).subscribe(block => {
           // this.datas.push(block);
          });
          this.alertService.showSuccess("Bloco salvo com sucesso");
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.mountForm();
    console.log(this.datas.length);
  }
}
