import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type EmployeeDocument = mongoose.Document & {
    name: string;
    employeeId: string;
    email: string;
    gender: string;
    dob: Date;
    address: string;
    password: string;
    role: string;
    department: string;
    profile: {
        name: string;
        employeeId: string;
        email: string;
        gender: string;
        dob: Date;
        address: string;
        department: string;
        role: string;
    }
    comparePassword: comparePasswordFunction;
};

type comparePasswordFunction = (candidatePassword: string) => Promise<boolean>;

const EmployeeSchema = new mongoose.Schema<EmployeeDocument>(
    {
        name: { type: String, required: true },
        employeeId: { type: String, required: true },
        email: { type: String, required: true },
        gender: { type: String, required: true },
        dob: { type: Date, required: true },
        address: { type: String, required: true },
        department: { type: String, required: true },
        password: String,
        role: { type: String, default: "employee" },
        profile: {
            name: { type: String, required: true },
            employeeId: { type: String, required: true },
            email: { type: String, required: true },
            gender: { type: String, required: true },
            dob: { type: Date, required: true },
            address: { type: String, required: true },
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