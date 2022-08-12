import axios from 'axios';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const createTodo = (todo: Todo) =>
  axios.post('http://localhost:3001/todos', todo);

export async function getTodos(): Promise<Todo[]> {
  const response = await axios.get('http://localhost:3001/todos');
  return response.data;
}
