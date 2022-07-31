import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type AdminDocument = mongoose.Document & {
    name: string;
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
        name: string;
        employeeId: string;
        email: string;
        contactNo: string;
        gender: string;
        dob: Date;
        addr_line1: string;
        addr_line2: string;
        city: string;
        state: string;
        country: string;
        office_branch: string;
        department: string;
        role: string;
    }
    comparePassword: comparePasswordFunction;
};

type comparePasswordFunction = (candidatePassword: string) => Promise<boolean>;

const AdminSchema = new mongoose.Schema<AdminDocument>(
    {
        name: { type: String, required: true },
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
        role: { type: String, default: "admin" },
        resetPasswordToken: { type: String, default: null },
        resetPasswordExpires: { type: Date, default: null },
        profile: {
            name: { type: String, required: true },
            employeeId: { type: String, required: true },
            email: { type: String, required: true },
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