import { Admin } from "../../models/admin.model";
import * as Sentry from "@sentry/node";
import { CreateAdminInput } from "../../types/types";
import { v4 } from "uuid";
export const createAdmin = async (body: CreateAdminInput) => {
    try {
        if (!body) {
            return {
                error: true,
                message: "Body cannot be empty"
            };
        }
        const admin = new Admin();
        admin.name = body.name;
        admin.employeeId = "A" + v4();
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
