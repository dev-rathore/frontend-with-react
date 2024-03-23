import { useCallback, useState } from 'react';

import {
  AsyncError,
  AsyncOperationError,
  AsyncOperationResult,
  UseAsyncOperationResponse,
} from '../types/async-operation';

const useAsyncOperation = <T>(
  asyncFn: (...args: unknown[]) => Promise<AsyncOperationResult<T>>,
): UseAsyncOperationResponse<T> => {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AsyncError | undefined>(undefined);

  const asyncCallback = useCallback(
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
        const err = new AsyncOperationError({
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
    asyncCallback,
    error,
    isLoading,
    result,
  };
};

export default useAsyncOperation;
