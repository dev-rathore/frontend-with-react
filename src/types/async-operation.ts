import { JsonObject } from ".";

export interface AsyncError {
  code: string;
  message: string;
}

export interface AsyncOperationResult<T> {
  error?: AsyncError;
  data?: T;
}

export interface UseAsyncOperationResponse<T> extends AsyncOperationResult<T> {
  result: T;
  asyncCallback: (...args: unknown[]) => Promise<T>;
  isLoading: boolean;
}

export class AsyncOperationError implements AsyncError {
  code: string;
  message: string;

  constructor(json: JsonObject) {
    this.code = json.code as string;
    this.message = json.message as string;
  }
}