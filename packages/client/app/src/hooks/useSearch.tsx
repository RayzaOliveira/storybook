import { useQuery } from 'react-query';
import api from '../services/api';

const useSearch = () => {
  const { isLoading, error, data, isFetching, refetch } = useQuery(
    'floof',
    () => api.get('/'),
  );

  return {
    isLoading,
    error,
    data,
    isFetching,
    refetch,
  };
};

export default useSearch;
