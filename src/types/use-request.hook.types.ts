import { JsonObject } from ".";

export interface AsyncError {
  code: string;
  message: string;
}

export interface RequestResult<T> {
  data?: T;
  error?: AsyncError;
}

export interface RequestResponse<T> extends RequestResult<T> {
  isLoading: boolean;
  requestCallback: (...args: unknown[]) => Promise<T>;
  result: T;
}

export class RequestError implements AsyncError {
  code: string;
  message: string;

  constructor(json: JsonObject) {
    this.code = json.code as string;
    this.message = json.message as string;
  }
}
