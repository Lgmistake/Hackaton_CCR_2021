import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StorageService } from '../registro/storage.service';
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
​
@Injectable()
export class TodoListService {
  todoList: FormGroup[];
​
  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
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
