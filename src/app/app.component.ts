import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [{ id: '', name: '', done: false }] as Todo[];
  todo: Todo = { id: '', name: '', done: false } as Todo;
  actionLabel: string;
  inUpdateMode = false;

  constructor(private dbService: DatabaseService) {}

  ngOnInit() {
    this.clear();
    this.dbService.getTodos().then((payload) => {
      this.todos = payload.data;
    });
  }

  clear() {
    this.todo = new Todo();
    this.actionLabel = 'ADD';
  }

  onClearInput() {
    console.log('clear input clicked');
    this.todo = new Todo();
  }

  onAddTodo() {
    if (this.todo.id) {
      this.updateTodo();
      this.inUpdateMode = false;
      return;
    }
    this.dbService.addTodo(this.todo).then(() => {

      this.todos.unshift(this.todo);
      this.clear();
      this.inUpdateMode = false;
    });
  }

  onSelectTodo(todo: Todo) {
    this.todo = todo;
    this.inUpdateMode = true;
    this.actionLabel = 'UPDATE';
  }

  updateTodo() {
    this.dbService.update(this.todo).then(() => {
      let index = this.todos.findIndex((todo) => todo.id === this.todo.id);
      this.todos[index] = this.todo;
      this.clear();
    });
  }

  onTodoCompleted(todo: Todo) {
    this.todo = todo;
    this.todo.done = !todo.done;
    this.updateTodo();
  }

  onDeleteTodo(todo: Todo) {
    this.dbService
      .deleteTodo(todo)
      .then(() => (this.todos = this.removeFromArray(this.todos, todo.id)));
  }

  // helper functions
  removeFromArray(arry: Todo[], id: string) {
    return arry.filter((ele) => ele.id != id);
  }
}
