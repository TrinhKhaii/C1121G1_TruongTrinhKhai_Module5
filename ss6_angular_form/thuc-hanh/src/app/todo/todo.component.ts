import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo.service";
import {Todo} from "../model/todo";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(),
    content: new FormControl(),
    complete: new FormControl(false)
  })

  // @ts-ignore
  todo: Todo;

  content = new FormControl();
  constructor(private todoService: TodoService) { }

  getAll() {
    this.todoService.getAll().subscribe(res => {
      this.todos = res;
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

  delete(id: number) {
    this.todoService.getById(id).subscribe(res => {
      this.todo = res;
      this.todo.complete = !this.todo.complete;
      console.log(this.todo);
      this.todoService.update(this.todo.id, this.todo).subscribe(() => {
        this.getAll()
        console.log("Complete!")
      })
      this.getAll();
    })
  }

  submit() {
    this.todo = this.todoForm.value;
    this.todoService.save(this.todo).subscribe(() => {
      this.todoForm.reset();
      this.getAll()
      console.log("Add success!")
    })
  }
}
