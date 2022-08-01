import { useMutation } from '@tanstack/react-query';
import {
  login,
  createEmployee,
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

export const useMutateCreateEmployee = ({ onSuccess, onError, onMutate }) => {
  return useMutation((data) => createEmployee(data), {
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
}