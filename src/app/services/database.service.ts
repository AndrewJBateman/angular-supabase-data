import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Todo } from '../models/todo.model';
import { initSupabase } from '../utils/initSupabase';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  supabase: SupabaseClient = createClient(
    initSupabase.supabaseUrl,
    initSupabase.supabaseKey
  );

  constructor() {}

  async addTodo(todo: Todo) {
    const { data, error } = await this.supabase
      .from<Todo>('todos')
      .insert(todo);
    return { data, error };
  }

  async getTodos() {
    const { data, error } = await this.supabase
      .from<Todo>('todos')
      .select('*')
      .limit(10);
    return { data, error };
  }

  async update(todo: Todo) {
    const { data, error } = await this.supabase
      .from<Todo>('todos')
      .update(todo)
      .match({ id: todo.id });
    return { data, error };
  }

  async deleteTodo(todo: Todo) {
    const { data, error } = await this.supabase
      .from<Todo>('todos')
      .delete()
      .match({ id: todo.id });
    return { data, error };
  }
}
