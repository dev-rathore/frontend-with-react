import { useCallback, useState } from 'react';

import {
  AsyncError,
  RequestError,
  RequestResponse,
  RequestResult,
} from '../types/use-request.hook.types';

const useRequest = <T>(
  asyncFn: (...args: unknown[]) => Promise<RequestResult<T>>,
): RequestResponse<T> => {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AsyncError | undefined>(undefined);

  const requestCallback = useCallback(
    async (...args: unknown[]) => {
      setError(undefined);
      setLoading(true);
      try {
        const response = await asyncFn(...args);

        if (response.data) {
          setResult(response.data);
        }

        return response?.data;
      } catch (e: any) {
        const err = new RequestError({
          code: e?.response?.data?.code || e.code,
          message: e?.response?.data?.message || e.message,
        });

        setError(err);
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    },
    [asyncFn],
  );

  return {
    error,
    isLoading,
    requestCallback,
    result,
  };
};

export default useRequest;
