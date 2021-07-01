import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  // todos: Todo[] = [{id: '', name: '', done: false}] as Todo[];
  // todo: Todo = {id: '', name: '', done: false} as Todo;
  actionLabel: string;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.clear();

    this.api.getTodos().then((payload) => {
      this.todos = payload.data;
    });
  }

  clear() {
    this.todo = new Todo();
    this.actionLabel = 'ADD';
  }

  addTodo() {
    if (this.todo.id) {
      this.update();
      return;
    }
    this.api.addTodo(this.todo).then((payload) => {
      this.todos.push(payload.data[0]);
      this.clear();
    });
  }

  select(todo: Todo) {
    this.todo = todo;
    this.actionLabel = 'UPDATE';
  }

  update() {
    this.api.update(this.todo).then(() => {
      let index = this.todos.findIndex((t) => t.id == this.todo.id);
      this.todos[index] = this.todo;
      this.clear();
    });
  }
  check(todo: Todo) {
    this.todo = todo;
    this.todo.done = !todo.done;
    this.update();
  }

  arrayRemove(arry: Todo[], id: string) {
    return arry.filter((ele) => ele.id != id);
  }
  delete(todo: Todo) {
    this.api
      .deleteTodo(todo)
      .then((dado) => (this.todos = this.arrayRemove(this.todos, todo.id)));
  }
}
