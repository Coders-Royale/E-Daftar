import { useMutation } from '@tanstack/react-query';
import {
  login,
} from '../services';

export const useMutateLogin = ({ onSuccess, onError, onMutate }) => {
  return useMutation((data) => login(data), {
    onSuccess: (result) => {
      typeof onSuccess && onSuccess(result);
    },
    onError: async (err) => {
      typeof onError && onError(err);
    },
    onMutate: async (data) => {
      typeof onMutate && onMutate(data);
    }
  });
};