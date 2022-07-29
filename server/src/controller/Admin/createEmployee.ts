import { Employee } from "../../models/employee.model";
import * as Sentry from "@sentry/node";
import { CreateEmployeeInput } from "../../types/types";
import { genPassword } from "../../utils/genPassword";
import { sendCredentialEmail } from "../../utils/mailer";

export const createEmployee = async (body: CreateEmployeeInput) => {
    try {
        if (!body) {
            return {
                error: true,
                message: "Body cannot be empty"
            };
        }
        let employeeSNo;
        const noOfDocuments = await Employee.countDocuments();
        if (noOfDocuments == 0) {
            employeeSNo = 1;
        }
        else {
            // get last document from employee database
            const employeeList = await Employee.find({}).sort({ "employeeId": -1 });
            const lastEmployee = employeeList[0];
            if (!lastEmployee) {
                employeeSNo = 1;
            }
            else {
                const lastEmployeeId = lastEmployee.employeeId;
                const Sno = lastEmployeeId.split("E")[1];
                employeeSNo = parseInt(Sno) + 1;
            }
        }

        // generate password
        const password = genPassword();

        const employee = new Employee();
        employee.name = body.name;
        employee.employeeId = "E" + employeeSNo.toString();
        employee.email = employee.employeeId + "." + body.department.toLowerCase() + "@gmail.com";
        employee.gender = body.gender;
        employee.dob = body.dob;
        employee.address = body.address;
        employee.department = body.department.toLowerCase();
        employee.password = password;
        employee.profile.name = body.name;
        employee.profile.employeeId = employee.employeeId;
        employee.profile.email = employee.email;
        employee.profile.gender = body.gender;
        employee.profile.dob = body.dob;
        employee.profile.address = body.address;
        employee.profile.department = body.department.toLowerCase();

        // Send email to user about his Login Credentials
        const credentailMail = await sendCredentialEmail(body.personalEmail, employee.employeeId, password);
        if (credentailMail.error) {
            return {
                error: true,
                message: credentailMail.message
            };
        }

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