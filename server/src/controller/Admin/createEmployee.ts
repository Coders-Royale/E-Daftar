import { Employee } from "../../models/employee.model";
import * as Sentry from "@sentry/node";
import { CreateEmployeeInput } from "../../types/types";

export const createEmployee = async (body: CreateEmployeeInput) => {
    try {
        if (!body) {
            return {
                error: true,
                message: "Body cannot be empty"
            };
        }
        var employeeSNo;
        // get last employee docuement from the database
        const lastEmployee = await Employee.findOne({}).sort({ employeeSNo: -1 }).limit(1);
        if (!lastEmployee) {
            employeeSNo = 1;
        }
        else {
            const lastEmployeeId = lastEmployee.employeeId;
            const Sno = lastEmployeeId.split("E")[1];
            employeeSNo = parseInt(Sno) + 1;
        }
        const employee = new Employee();
        employee.name = body.name;
        employee.employeeId = "E" + employeeSNo;
        employee.email = employee.employeeId + "." + body.department.toLowerCase() + "@gmail.com";
        employee.gender = body.gender;
        employee.dob = body.dob;
        employee.address = body.address;
        employee.department = body.department.toLowerCase();
        employee.password = body.password;
        employee.profile.name = body.name;
        employee.profile.employeeId = employee.employeeId;
        employee.profile.email = employee.email;
        employee.profile.gender = body.gender;
        employee.profile.dob = body.dob;
        employee.profile.address = body.address;
        employee.profile.department = body.department.toLowerCase();
        await employee.save();
        return {
            error: false,
            message: "Employee created successfully"
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