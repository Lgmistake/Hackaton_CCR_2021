import { RegisterComponent } from './../registro/register.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../config/notification.service';
import { Router } from '@angular/router';
import { BlockType } from './../class/BlockType';
import { URL_API } from './../url.api';
import { Block } from './../class/Block';
import { Document } from './../class/Document';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"]
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private alertService: NotificationService,
    private rota: Router
  ) {}

  ngOnInit() {
    this.mountForm();
  }

  mountForm() {
    this.formulario = this.fb.group({
      nome: new FormControl(""),
      contractNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [Validators.required]),
      rg: new FormControl("", [Validators.required]),
      o_e: new FormControl("", [Validators.required]),
      data_e: new FormControl("", [Validators.required]),
      t_e: new FormControl("",),
      zs: new FormControl("",),
      d_n: new FormControl("", [Validators.required]),
      nacionalidade: new FormControl("",),
      nomepai: new FormControl("",),
      nomemae: new FormControl("",),
      np: new FormControl("",),
      ch: new FormControl("",),
      cep: new FormControl("",),
      end: new FormControl("",),
      mmm: new FormControl(""),
    });
  }

  register(registro: RegisterComponent) {
    return this.http.post<RegisterComponent>(`${URL_API}/update`, registro);
    this.alertService.showSuccess("Cadastrado com sucesso");
  }
}


