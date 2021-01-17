import { Router } from '@angular/router';
import { NotificationService } from './../config/notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  formulario: FormGroup;
  constructor(
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
      senha: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    });
  }
register() {
  this.alertService.showSuccess("Cadastrado com sucesso");
}
}
