import QUERY_KEYS from "./queryKeys";
import { useQuery } from '@tanstack/react-query';
import {
	getEmployee,
	trackStatus,
	listDocument,
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

export const useTrackStatus = (params) => {
	return useQuery(
		[QUERY_KEYS.TRACK_STATUS, params.documentId, params.employeeId],
		() => trackStatus(params),
		{
			retry: false,
		}
	);
}

export const useListDocument = (params) => {
	return useQuery(
		[QUERY_KEYS.LIST_DOCUMENT, params.employeeId],
		() => listDocument(params),
		{
			retry: false,
		}
	);
}