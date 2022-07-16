import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type AdminDocument = mongoose.Document & {
    name: string;
    employeeID: string;
    email: string;
    gender: string;
    dob: Date;
    address: string;
    department: string;
    password: string;
    role: string;
    profile: {
        name: string;
        employeeID: string;
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

const AdminSchema = new mongoose.Schema<AdminDocument>(
    {
        name: { type: String, required: true },
        employeeID: { type: String, required: true },
        email: { type: String, required: true },
        gender: { type: String, required: true },
        dob: { type: Date, required: true },
        address: { type: String, required: true },
        department: { type: String, required: true },
        password: String,
        role: { type: String, default: "admin" },
        profile: {
            name: { type: String, required: true },
            employeeID: { type: String, required: true },
            email: { type: String, required: true },
            gender: { type: String, required: true },
            dob: { type: Date, required: true },
            address: { type: String, required: true },
            department: { type: String, required: true },
            role: { type: String, default: "admin" }
        }
    },
    { timestamps: true }
);

/**
 * Password hash middleware.
 */
AdminSchema.pre("save", function save(next) {
    const employee = this as AdminDocument;
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

const comparePassword: comparePasswordFunction = async function (candidatePassword: string) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    }
    catch (err) {
        throw new Error(err);
    }
};

AdminSchema.methods.comparePassword = comparePassword;

export const Admin = mongoose.model<AdminDocument>("Admin", AdminSchema);