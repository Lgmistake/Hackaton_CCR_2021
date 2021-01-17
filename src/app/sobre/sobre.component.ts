import { Router } from '@angular/router';
import { NotificationService } from './../config/notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../sobre/storage.service';
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
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  todoList: FormGroup[];
  ​
    constructor(private storageService: StorageService) {
      this.todoList =
        storageService.getData(todoListStorageKey) || defaultTodoList;
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ​
    saveList() {
      this.storageService.setData(todoListStorageKey, this.todoList);
  }
  ​
    addItem(item: FormGroup) {
      this.todoList.push(item);
      this.saveList();
    }
  ​
    updateItem(item, changes) {
      const index = this.todoList.indexOf(item);
      this.todoList[index] = { ...item, ...changes };
      this.saveList();
    }
  ​
    deleteItem(item) {
      const index = this.todoList.indexOf(item);
      this.todoList.splice(index, 1);
      this.saveList();
    }
  ​
  }
