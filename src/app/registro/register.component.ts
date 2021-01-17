import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../config/notification.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
​
const todoListStorageKey = 'Todo_List';
​
const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
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
      email: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [Validators.required]),
    });
  }

  register() {
    this.alertService.showSuccess("Cadastrado com sucesso");
  }
 addUsuario = function () {
    this.usuarios.push({ email: this.usuario.email, genero: this.usuario.genero, nome: this.usuario.nome });
    localStorage.setItem('Usuarios', JSON.stringify(this.usuarios));
    this.usuario = {};
    console.log(this.usuarios)
    this.register()
};
}
