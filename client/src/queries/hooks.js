import QUERY_KEYS from "./queryKeys";
import { useQuery } from '@tanstack/react-query';
import {
	getEmployee,
	getAdmin,
	trackStatus,
	listDocument,
	getRooms
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

export const useAdminInfo = (params) => {
	return useQuery(
		[QUERY_KEYS.GET_ADMIN, params.departmentId, params.adminId],
		() => getAdmin(params),
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

export const useRooms = (params) => {
	return useQuery(
		[QUERY_KEYS.GET_ROOMS, params.employeeId],
		() => getRooms(params),
		{
			retry: false,
		}
	);
}