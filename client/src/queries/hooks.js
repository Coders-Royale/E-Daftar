import QUERY_KEYS from "./queryKeys";
import { useQuery } from '@tanstack/react-query';
import {
  getEmployee,
} from "../services";

export const useEmployeeInfo = (params) => {
	return useQuery(
		[QUERY_KEYS.GET_EMPLOYEE, params.departmentId, params.employeeId],
		() => getEmployee(params),
		{
			retry: false,
		}
	);
}
