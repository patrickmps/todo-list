import { action, makeObservable, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import todoService from '../services/todoService';
import { NewTodoType, TodoType } from './@types/todo';

class TodoStore {
  todos: TodoType[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      create: action,
      update: action,
      remove: action,
      getAll: action
    });
  }

  getAll = async () => {
    const data = await todoService.getAll();
    runInAction(() => {
      this.todos = data;
    });
  };
  create = async (todo: NewTodoType) => {
    const response = await todoService.create(todo);
    runInAction(() => {
      this.todos = this.todos.concat(response);
    });
  };
  update = async (id: string, updatedTodo: TodoType) => {
    await todoService.update(id, updatedTodo);
    runInAction(() => {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, note: updatedTodo.note, done: updatedTodo.done } : todo
      );
    });
  };
  remove = async (id: string) => {
    await todoService.remove(id);
    runInAction(() => {
      this.todos = this.todos.filter((todo) => todo.id != id);
    });
  };
}

export default createContext(new TodoStore());
