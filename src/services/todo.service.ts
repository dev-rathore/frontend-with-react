import { AccessToken } from '../types';
import { ApiResponse } from '../types/service-response';
import { Todo } from '../types/todo';

import APIService from './api.service';

export default class TodoService extends APIService {
  getTodos = async (): Promise<ApiResponse<Todo[]>> => {
    const accessToken = JSON.parse(
      localStorage.getItem('access_token')!,
    ) as AccessToken;

    return this.apiClient.get(`/todos/${accessToken.accountId}`, {
      headers: {
        Authorization: `Bearer ${accessToken.token}`,
      },
    });
  };
}
