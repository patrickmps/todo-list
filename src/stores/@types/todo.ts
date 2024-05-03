export type TodoType = {
  id: string;
  note: string;
  done: boolean;
};

export type NewTodoType = Omit<TodoType, 'id'>;
