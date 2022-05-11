import { useEffect, useState } from 'react';
import { handleError } from '../lib/handleError';
import { useAbort } from './useAbort';

const useApi = apiFunc => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [ab, abort] = useAbort();
  const { abortable, signal } = ab;

  const request = async (...args) => {
    let response = null;

    try {
      setLoading(true);
      response = await abortable(apiFunc(...args), { signal });
      const { items } = response.data;
      setLoading(false);
      setItems(items);
    } catch (error) {
      handleError(error, () => setError(error));
    }

    return response;
  };

  useEffect(() => {
    return () => {
      abort();
    };
  }, []);

  return {
    request,
    items,
    error,
    loading,
  };
};


export default useApi;