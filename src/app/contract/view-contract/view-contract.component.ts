import { NotificationService } from './../../config/notification.service';

import { ContractService } from './../contract.service';
import { Document } from './../../class/Document';
import {
  MatDialog} from '@angular/material';
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
  SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockType } from 'src/app/class/BlockType';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.scss']
})
export class ViewContractComponent implements OnInit, OnChanges {
  formulario: FormGroup;
  formularioHierar: FormGroup;

  @Output() blocks = new EventEmitter<any>();
  @Input() idDocument: number;
  document: Document = null;
  blockTypes: BlockType[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private contractService: ContractService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        console.log(params);
        this.idDocument = params.id ? params.id : 0;
        this.searchBlockType();
        this.searchDocuments();
        this.mountForm();
      });
    }
  searchDocuments() {
    this.contractService.findDocument(this.idDocument).subscribe(result => {
      this.document = result;
      console.log(this.document);
    });
  }

  async searchBlockType() {
    const blockTypes = await this.contractService
      .searchBlockTypes()
      .toPromise();
    this.blockTypes = blockTypes;
  }
  mountForm() {
    this.formulario = this.fb.group({
      contractNumber: new FormControl(
        this.document ? this.document.contractNumber : '',
        [Validators.required]
      ),
      title: new FormControl(this.document ? this.document.title : '', [
        Validators.required
      ]),
      description: new FormControl(
        this.document ? this.document.description : '',
        [Validators.required]
      ),
      beginDate: new FormControl(this.document ? this.document.beginDate : '', [
        Validators.required
      ]),
      comments: new FormControl(this.document ? this.document.comments : '', [
        Validators.required
      ]),
      version: new FormControl(this.document ? this.document.version : '', [
        Validators.required
      ]),
      endDate: new FormControl(this.document ? this.document.endDate : '', [
        Validators.required
      ]),
      publico: new FormControl(this.document ? this.document.publico : '', [
        Validators.required
      ])
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.mountForm();
  }
}
