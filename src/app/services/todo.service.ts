import { Injectable } from '@angular/core';

import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: AngularFireList<any>
  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList(){
    this.todoList = this.firebasedb.list("titles")
    return this.todoList
  }
  addTodo(title:string){
    this.todoList.push({
      title:title,
      isChecked: false
    })
  }
  updateTodo($key:string,flag:boolean){
    this.todoList.update($key,{isChecked: flag})
    .then(()=>console.log("exito"))
    .catch(()=>console.log("error"))
  }
  removeTodo($key){
    this.todoList.remove($key)
  }
}
