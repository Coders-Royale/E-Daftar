import { Admin } from "../../models/admin.model";
import { Employee } from "../../models/employee.model";
import { LoginInput } from "../../types/types";
import * as Sentry from "@sentry/node";
import { createToken } from "../../utils/createToken";

export const Login = async (body: LoginInput) => {
    try {
        if (!body) {
            return {
                error: true,
                message: "Body cannot be empty"
            };
        }
        if (body.role.toLowerCase() == "admin") {
            const admin = await Admin.findOne({ email: body.email });
            if (admin) {
                const isMatch = await admin.comparePassword(body.password);
                if (isMatch) {
                    const token = await createToken({
                        id: admin.employeeID,
                        role: "admin"
                    });
                    return {
                        error: false,
                        message: "Login successful",
                        data: admin.profile,
                        token: token.message
                    };
                }
                else {
                    return {
                        error: true,
                        message: "Invalid password"
                    };
                }
            }
            else {
                return {
                    error: true,
                    message: "Admin not found"
                };
            }
        }
        else if (body.role.toLowerCase() == "employee") {
            const employee = await Employee.findOne({ email: body.email });
            if (employee) {
                const isMatch = await employee.comparePassword(body.password);

                if (isMatch) {
                    const token = await createToken({
                        id: employee.employeeID,
                        role: "employee"
                    });
                    return {
                        error: false,
                        message: "Login successful",
                        data: employee.profile,
                        token: token.message
                    };
                }
                else {
                    return {
                        error: true,
                        message: "Invalid password"
                    };
                }
            }
            else {
                return {
                    error: true,
                    message: "Employee not found"
                };
            }
        }
        else if (body.role.toLowerCase() == "hod") {
            const employee = await Employee.findOne({ email: body.email, role: "hod" });
            if (employee) {
                const isMatch = await employee.comparePassword(body.password);

                if (isMatch) {
                    const token = await createToken({
                        id: employee.employeeID,
                        role: "hod"
                    });
                    return {
                        error: false,
                        message: "Login successful",
                        data: employee.profile,
                        token: token.message
                    };
                }
                else {
                    return {
                        error: true,
                        message: "Invalid password"
                    };
                }
            }
            else {
                return {
                    error: true,
                    message: "Employee not found"
                };
            }
        }
        else {
            return {
                error: true,
                message: "Invalid role"
            };
        }
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