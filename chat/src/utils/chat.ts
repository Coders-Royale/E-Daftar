import { Message } from "../models/message.model";
const users: any[] = [];

// Join user to chat
export function userJoin(id: string, username: string, room: string) {
    const user = { id, username, room };
    // check if user alerady exists in users array(to avoid duplicates)
    if (users.indexOf(user) === -1) {
        users.push(user);
        return user;
    }
    else {
        return users[users.indexOf(user)];
    }
}

// Get current user
export function getCurrentUser(id: string) {
    return users.find((user) => user.id === id);
}

// User leaves chat
export function userLeave(id: string) {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
export function getRoomUsers(room: string) {
    return users.filter((user) => user.room === room);
}


export async function createNewMessageInDb(userId: string, message: string, roomId: string, senderName: string, subject: string) {
    const newMessage = new Message({
        senderId: userId,
        content: message,
        conversationId: roomId,
        senderName: senderName,
        subject: subject
    });
    await newMessage.save();
}

export async function checkIfRoomHasNoMessages(roomId: string) {
    const messages = await Message.find({ conversationId: roomId });
    if (messages.length === 0) {
        return true;
    }
    else {
        return false;
    }
}