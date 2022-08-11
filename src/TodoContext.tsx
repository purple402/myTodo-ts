import React, { useReducer, Dispatch, createContext } from 'react';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: 'CREATE'; todo: Todo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

type State = Todo[];

type DispatchType = Dispatch<Action>;

const initialTodos: Todo[] = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo: Todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error('Unhandled action');
  }
}

const TodoStateContext = createContext<State | null>(null);
const TodoDispatchContext = createContext<DispatchType | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// export function useTodoState() {
//   const state = useContext(TodoStateContext);
//   if (!state) throw new Error('cannot find TodoProvider');
//   return state;
// }

// export function useTodoDispatch() {
//   const dispatch = useContext(TodoDispatchContext);
//   if (!dispatch) throw new Error('cannot find TodoProvider');
//   return dispatch;
// }
