import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import { ApiResponse } from '../types/service-response';
import { AsyncError } from '../types/async-operation';
import { Todo } from '../types/todo';
import { TodoService } from '../services';
import useAsyncOperation from '../helpers/use-async-operation.hook';

type TodoContextType = {
  getTodos: () => Promise<Todo[]>;
  isTodoLoading: boolean;
  todoError: AsyncError;
  todos: Todo[];
};

const TodoContext = createContext<TodoContextType | null>(null);

const todoService = new TodoService();

export const useTodoContext = (): TodoContextType => useContext(TodoContext);

const getTodosFn = async (): Promise<ApiResponse<Todo[]>> => todoService
  .getTodos();

export const TodoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    asyncCallback: getTodos,
    error: todoError,
    isLoading: isTodoLoading,
    result: todos,
  } = useAsyncOperation(getTodosFn);

  return (
    <TodoContext.Provider
      value={{
        getTodos,
        isTodoLoading,
        todoError,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
