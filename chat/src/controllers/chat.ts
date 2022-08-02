import { Request, Response } from "express";
import { Conversation } from "../models/conversation.model";
import { Message } from "../models/message.model";
import * as Sentry from "@sentry/node";
import { CreateRoomInput, JoinRoomInput, LoadMessageInput } from "../types/types";

export const createRoom = async (req: Request, res: Response) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to create chat room",
            });
        }
        const body = req.body as CreateRoomInput;
        if (!body.conversationName || !body.documentId) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to create chat room",
            });
        }
        const conversation = await Conversation.findOne({ conversationName: body.conversationName });
        if (conversation) {
            return res.status(400).json({
                error: true,
                mesaage: "Chat room already exists",
            });
        }
        const newConversation = new Conversation({
            conversationName: body.conversationName,
            documentId: body.documentId,
        });
        await newConversation.save();
        return res.status(200).json({
            error: false,
            message: "Chat room created successfully",
            data: newConversation
        });
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        res.status(500).json({
            error: true,
            message: err.message
        });
    }
};

export const joinRoom = async (req: Request, res: Response) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to join chat room",
            });
        }
        const body = req.body as JoinRoomInput;
        if (!body.roomId || !body.employeeId || !body.name) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to join chat room",
            });
        }
        const conversation = await Conversation.findOne({ _id: body.roomId });
        if (!conversation) {
            return res.status(400).json({
                error: true,
                mesaage: "Chat room does not exist",
            });
        }
        const userExists = conversation.participants.find(participant => participant.id === body.employeeId);
        if (userExists) {
            return res.status(400).json({
                error: true,
                mesaage: "User already exists in chat room",
            });
        }
        else {
            conversation.participants.push({
                id: body.employeeId,
                info: {
                    id: body.employeeId,
                    name: body.name
                }
            });
            await conversation.save();
            return res.status(200).json({
                error: false,
                message: "User joined chat room successfully",
            });
        }
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        res.status(500).json({
            error: true,
            message: err.message
        });
    }
};

export const getRoom = async (req: Request, res: Response) => {
    try {
        if (!req.query["employeeId"]) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to get chat room",
            });
        }
        const employeeId = req.query["employeeId"];
        const conversations = await Conversation.find({
            "participants.id": employeeId
        });
        if (!conversations) {
            return res.status(400).json({
                error: true,
                mesaage: "No chat room found",
            });
        }
        return res.status(200).json({
            error: false,
            message: "Chat room fetched successfully",
            data: conversations
        });
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        res.status(500).json({
            error: true,
            message: err.message
        });
    }
};

export const getMessages = async (req: Request, res: Response) => {
    try {
        if (!req.query["roomId"]) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to get chat room",
            });
        }
        const roomId = req.query["roomId"];
        const messages = await Message.find({
            conversationId: roomId
        });
        if (!messages) {
            return res.status(400).json({
                error: true,
                mesaage: "No chat room found",
            });
        }
        return res.status(200).json({
            error: false,
            message: "Chat room fetched successfully",
            data: messages
        });
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        res.status(500).json({
            error: true,
            message: err.message
        });
    }
};

// Find the conversation with the documentId
export const getConversation = async (req: Request, res: Response) => {
    try {
        if (!req.query["documentId"]) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to get conversation",
            });
        }
        const documentId = req.query["documentId"];
        const conversation = await Conversation.findOne({
            documentId: documentId
        });
        if (!conversation) {
            return res.status(400).json({
                error: true,
                mesaage: "No conversation found",
            });
        }
        return res.status(200).json({
            error: false,
            message: "Conversation fetched successfully",
            data: conversation
        });
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        res.status(500).json({
            error: true,
            message: err.message
        });
    }
}

export const loadMessage = async (req: Request, res: Response) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to load message",
            });
        }
        const body = req.body as LoadMessageInput;
        if (!body.pageNo || !body.employeeId) {
            return res.status(400).json({
                error: true,
                mesaage: "Invalid request to load message",
            });
        }
        const conversations = await Conversation.find({
            "participants.id": body.employeeId
        });
        if (!conversations) {
            return res.status(400).json({
                error: true,
                mesaage: "No conversation found",
            });
        }
        const allMessages = [];
        for (const conversation of conversations) {
            const messages = await Message.find({
                conversationId: conversation._id
            });
            allMessages.push(...messages);
        }
        if (allMessages.length === 0) {
            return res.status(400).json({
                error: true,
                mesaage: "No message found",
            });
        }
        // sort the messages in decreasing order of createdAt
        const sorrtedMessages = allMessages.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        // In a single page return 20 messages
        const messages = sorrtedMessages.slice((body.pageNo - 1) * 20, body.pageNo * 20);
        return res.status(200).json({
            error: false,
            message: "Messages fetched successfully",
            data: messages
        });
    }
    catch (err) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        res.status(500).json({
            error: true,
            message: err.message
        });
    }
}