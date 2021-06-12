import { Component, OnInit } from '@angular/core';

import {TodoService} from '../../services/todo.service'

// import {map} from 'rxjs/operators'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoListArray: any[]
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges()
      .subscribe((item)=>{
        this.todoListArray = []
        item.forEach(element =>{
          let x = element.payload.toJSON()
          x['$key'] = element.key
          console.log(x)
          this.todoListArray.push(x)
        })

        this.todoListArray.sort((a,b)=>{
          return a.isChecked - b.isChecked
        })
      })
  }

  addTodo(title:HTMLInputElement){
    this.todoService.addTodo(title.value)
    // console.log(title.value);
    title.value = ""
    return false
  }

  updateTodo($key:string,isChecked:boolean){
    this.todoService.updateTodo($key,!isChecked)
  }
  removeTodo($key){
    this.todoService.removeTodo($key)
  }
}