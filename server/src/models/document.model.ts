import mongoose from "mongoose";

export type Document = mongoose.Document & {
    documentID: string;
    employeeID: string;
    main_file: string[];
    reference_files: string[];
    permissions: string[];
    status: string[];
    category: string;
}

const DocumentSchema = new mongoose.Schema<Document>(
    {
        documentID: { type: String, required: true },
        employeeID: { type: String, required: true, $ref: "Employee" },
        main_file: { type: [String], required: true },
        reference_files: [String],
        permissions: [String],
        status: [String],
        category: { type: String, required: true }
    }
);

export const Document = mongoose.model<Document>("Document", DocumentSchema);