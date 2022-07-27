import { Document } from "../../models/document.model";
import * as Sentry from "@sentry/node";
import { CreateDocumentInput } from "../../types/types";
import { Admin } from "../../models/admin.model";
import axios from "axios";
var Document_Count = 0;

export const createDocument = async (body: CreateDocumentInput) => {
    try {
        if (!body) {
            return {
                error: true,
                message: "No data provided"
            }
        }
        // Find admin of the forwarding department
        const admin = await Admin.findOne({ department: body.forwarding_dept });
        if (!admin) {
            return {
                error: true,
                message: "Admin not found"
            }
        }
        Document_Count++;
        const document = new Document();
        document.documentId = "D" + Document_Count.toString();
        document.employeeId = body.employeeId;
        document.subject = body.subject;
        document.description = body.description;
        document.main_file = body.main_file;
        if (body.reference_file) {
            document.reference_files = body.reference_file;
        }
        document.permissions.push(admin.employeeId);
        document.status.push("Pending");
        document.time_recieved.push(new Date());
        document.category = body.category;
        await document.save();

        // TODO:
        // Now we need to create a Room for this document and add the employee and admin to it
        // Send request to chat server :
        // 1. Create a conversation (POST request /createRoom)
        const createRoomReuqest = {
            conversationName: document.documentId,
            documentId: document.documentId,
        }

        // 2. Add the employee and admin to the conversation (POST request /joinrRoom)
        return {
            error: false,
            message: "Document created successfully"
        }
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        return {
            error: true,
            message: err.message
        }
    }
}

async function getDocumentCount() {
    try {
        const count = await Document.countDocuments();
        return count;
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        return 0;
    }
}