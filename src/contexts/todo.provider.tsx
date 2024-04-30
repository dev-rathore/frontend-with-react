import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import { ApiResponse } from '../types/service-response';
import { AsyncError } from '../types/use-request.hook.types';
import { Todo } from '../types/todo';
import { TodoService } from '../services';
import useRequest from '../hooks/use-request.hook';

type TodoContextType = {
  getTodos: () => Promise<Todo[]>;
  isTodosLoading: boolean;
  todos: Todo[];
  todosError: AsyncError;
};

const TodoContext = createContext<TodoContextType | null>(null);

const todoService = new TodoService();

export const useTodoContext = (): TodoContextType => useContext(TodoContext);

const getTodosFn = async (): Promise<ApiResponse<Todo[]>> => todoService.getTodos();

export const TodoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    requestCallback: getTodos,
    error: todosError,
    isLoading: isTodosLoading,
    result: todos,
  } = useRequest(getTodosFn);

  return (
    <TodoContext.Provider
      value={{
        getTodos,
        isTodosLoading,
        todosError,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
