import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type EmployeeDocument = mongoose.Document & {
    firstName: string;
    lastName: string;
    employeeId: string;
    email: string;
    personal_email: string;
    contactNo: string;
    gender: string;
    dob: Date;
    addr_line1: string;
    addr_line2: string;
    city: string;
    state: string;
    country: string;
    office_branch: string;
    password: string;
    role: string;
    department: string;
    resetPasswordToken: string | null,
    resetPasswordExpires: Date | null,
    profile: {
        firstName: string;
        lastName: string;
        employeeId: string;
        contactNo: string;
        office_branch: string;
        email: string;
        gender: string;
        dob: Date;
        addr_line1: string;
        addr_line2: string;
        city: string;
        state: string;
        country: string;
        department: string;
        role: string;
    }
    comparePassword: comparePasswordFunction;
};

type comparePasswordFunction = (candidatePassword: string) => Promise<boolean>;

const EmployeeSchema = new mongoose.Schema<EmployeeDocument>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        employeeId: { type: String, required: true },
        email: { type: String, required: true },
        personal_email: { type: String, required: true },
        contactNo: { type: String, required: true },
        gender: { type: String, required: true },
        dob: { type: Date, required: true },
        addr_line1: { type: String },
        addr_line2: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String, default: "India" },
        office_branch: { type: String, required: true },
        department: { type: String, required: true },
        password: String,
        role: { type: String, default: "employee" },
        resetPasswordToken: { type: String, default: null },
        resetPasswordExpires: { type: Date, default: null },
        profile: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            employeeId: { type: String, required: true },
            contactNo: { type: String, required: true },
            office_branch: { type: String, required: true },
            email: { type: String, required: true },
            gender: { type: String, required: true },
            dob: { type: Date, required: true },
            addr_line1: { type: String },
            addr_line2: { type: String },
            city: { type: String },
            state: { type: String },
            country: { type: String, default: "India" },
            department: { type: String, required: true },
            role: { type: String, default: "employee" }
        }
    },
    { timestamps: true }
);

/**
 * Password hash middleware.
 */
EmployeeSchema.pre("save", function save(next) {
    const employee = this as EmployeeDocument;
    if (!employee.isModified("password")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(employee.password, salt).then(hashedPassword => {
            employee.password = hashedPassword;
            next();
        })
            .catch(err => console.log(err));
    });
});

const comparePassword: comparePasswordFunction = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    }
    catch (err) {
        throw new Error(err);
    }
};

EmployeeSchema.methods.comparePassword = comparePassword;

export const Employee = mongoose.model<EmployeeDocument>("Employee", EmployeeSchema);