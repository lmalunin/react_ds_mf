import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk: any): [(args?: any) => void, boolean, any] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (args: any) => {
      setIsLoading(true);
      dispatch(thunk(args))
        .unwrap()
        .catch((err: any) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
