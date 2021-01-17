import { BlockType } from './../../../class/BlockType';
import { NotificationService } from './../../../config/notification.service';
import { ContractService } from './../../contract.service';
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
  Input,
  Output,
  Inject,
  ViewChild
} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatStepper,
  MatHorizontalStepper,
  MatVerticalStepper
} from '@angular/material';

@Component({
  selector: 'app-add-new-contract',
  templateUrl: './add-new-contract.component.html',
  styleUrls: ['./add-new-contract.component.scss']
})
export class AddNewContractComponent implements OnInit {
  formulario: FormGroup;

  maxDate = new Date();
  @Input() public showModal: boolean;
  @Output() closeModal = new EventEmitter<boolean>();
  blockTypes: BlockType[] = [];

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AddNewContractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alertService: NotificationService,
    private formBuilder: FormBuilder,
    private contractService: ContractService
  ) {}

  ngOnInit() {
    this.mountForm();
    this.searchBlockType();
  }

  mountForm() {
    this.formulario = this.formBuilder.group({
      order: new FormControl(this.data ? this.data.order : '', [
        Validators.required
      ]),
      title: new FormControl(this.data ? this.data.title : '', [
        Validators.required
      ]),
      description: new FormControl(this.data ? this.data.description : '', [
        Validators.required
      ]),
      blockType: new FormControl(this.data ? this.data.blockType : '', [
        Validators.required
      ]),
      approval: new FormControl(this.data ? this.data.approval : ''),
      comments: new FormControl(this.data ? this.data.comments : '')
    });
  }

  async searchBlockType() {
    const blockTypes = await this.contractService
      .searchBlockTypes()
      .toPromise();
    this.blockTypes = blockTypes;
  }

  addBlock() {
    if (this.formulario.valid) {
      this.dialogRef.close(this.formulario.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
