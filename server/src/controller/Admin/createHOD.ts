import { Employee } from "../../models/employee.model";
import * as Sentry from "@sentry/node";
import { CreateEmployeeInput } from "../../types/types";
import { v4 } from "uuid";

export const createHOD = async (body: CreateEmployeeInput) => {
    try {
        if (!body) {
            return {
                error: true,
                message: "Body cannot be empty"
            };
        }
        const employee = new Employee();
        employee.name = body.name;
        employee.employeeID = v4();
        employee.email = employee.employeeID + "." + "HOD" + "." + body.department.toLowerCase() + "@gmail.com";
        employee.gender = body.gender;
        employee.dob = body.dob;
        employee.address = body.address;
        employee.department = body.department.toLowerCase();
        employee.password = body.password;
        employee.role = "hod";
        employee.profile.name = body.name;
        employee.profile.employeeID = employee.employeeID;
        employee.profile.email = employee.email;
        employee.profile.gender = body.gender;
        employee.profile.dob = body.dob;
        employee.profile.address = body.address;
        employee.profile.role = "hod";
        employee.profile.department = body.department.toLowerCase();
        await employee.save();
        return {
            error: false,
            message: "HOD created successfully"
        };
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        return {
            error: true,
            message: err.message
        };
    }
};