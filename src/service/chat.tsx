// src/services/chat.js
import { database } from "@/config/firebase";

import { ref, push, onValue, query, limitToLast } from "firebase/database";

export class ChatService {
  static async sendMessage(chatId, userId, message) {
    try {
      const messagesRef = ref(database, `chats/${chatId}/messages`);
      return await push(messagesRef, {
        text: message,
        senderId: userId,
        timestamp: Date.now(),
        status: "sent",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
  static subscribeToMessages(chatId, callback) {
    const messagesRef = ref(database, `chats/${chatId}/messages`);
    const recentMessagesQuery = query(messagesRef, limitToLast(50));
    return onValue(recentMessagesQuery, (snapshot) => {
      const messages = [];
      snapshot.forEach((child) => {
        messages.push({ id: child.key, ...child.val() });
      });
      callback(messages);
    });
  }
}
