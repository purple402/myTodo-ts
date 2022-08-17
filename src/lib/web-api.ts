import axios from 'axios';
import { Todo } from '../types/todos';

const URL = 'http://localhost:3001/todos';

export const createTodo = (todo: Todo) => axios.post(URL, todo);

export async function getTodos(): Promise<Todo[]> {
  const response = await axios.get(URL);
  return response.data;
}

export const deleteTodo = (todoId: number) => {
  axios.delete(`${URL}/${todoId}`);
};

