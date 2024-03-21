import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import type {AxiosResponse} from 'axios';
import {RepositoriesReturnType} from './types/github.ts';

export const useRepositories = () => {
  return useQuery<AxiosResponse<RepositoriesReturnType>>({
    queryKey: ['repositories'],
    queryFn: () => {
      return axios.get(
        'https://api.github.com/search/repositories?q=org:vacasaoss&sort=stars&order=desc',
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        },
      );
    },
  });
};
