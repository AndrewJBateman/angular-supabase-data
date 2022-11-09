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
      .from('todos')
      .insert(todo);
    return { data, error };
  }

  async getTodos() {
    const { data: todos, error } = await this.supabase
      .from('todos')
      .select('*')
      .order('id', { ascending: false })
      .limit(10);
    return { data: todos, error };
  }

  async update(todo: Todo) {
    const { data, error } = await this.supabase
      .from('todos')
      .update(todo)
      .match({ id: todo.id });
    return { data, error };
  }

  async deleteTodo(todo: Todo) {
    const { data, error } = await this.supabase
      .from('todos')
      .delete()
      .match({ id: todo.id });
    return { data, error };
  }
}
