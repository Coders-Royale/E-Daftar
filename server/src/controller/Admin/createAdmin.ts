import { Admin } from "../../models/admin.model";
import * as Sentry from "@sentry/node";
import { CreateAdminInput } from "../../types/types";

export const createAdmin = async (body: CreateAdminInput) => {
    try {
        if (!body) {
            return {
                error: true,
                message: "Body cannot be empty"
            };
        }
        let employeeSNo: number;
        // get last employee docuement from the database
        const noOfDocuments = await Admin.countDocuments();
        if (noOfDocuments == 0) {
            employeeSNo = 1;
        }
        else {
            const lastEmployee = await Admin.findOne({}).sort({ "employeeId": -1 });
            if (!lastEmployee) {
                employeeSNo = 1;
            }
            else {
                const lastEmployeeId = lastEmployee.employeeId;
                const Sno = lastEmployeeId.split("A")[1];
                employeeSNo = parseInt(Sno) + 1;
            }
        }
        const admin = new Admin();
        admin.name = body.name;
        admin.employeeId = "A" + employeeSNo.toString();
        admin.email = "admin." + body.department.toLowerCase() + "@gmail.com";
        admin.gender = body.gender;
        admin.dob = body.dob;
        admin.address = body.address;
        admin.department = body.department.toLowerCase();
        admin.password = body.password;
        admin.profile.name = body.name;
        admin.profile.employeeId = admin.employeeId;
        admin.profile.email = "admin." + body.department.toLowerCase() + "@gmail.com";
        admin.profile.gender = body.gender;
        admin.profile.dob = body.dob;
        admin.profile.address = body.address;
        admin.profile.department = body.department.toLowerCase();
        await admin.save();
        return {
            error: false,
            message: "Admin created successfully"
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
