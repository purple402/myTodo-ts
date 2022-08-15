import axios from 'axios';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const URL = "http://localhost:3001/todos"

export const createTodo = (todo: Todo) =>
  axios.post(URL, todo);

export async function getTodos(): Promise<Todo[]> {
  const response = await axios.get(URL);
  return response.data;
}
