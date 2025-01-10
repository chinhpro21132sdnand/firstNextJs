// src/services/chat.js
import { database } from "@/config/firebase";

import {
  ref,
  push,
  onValue,
  query,
  limitToLast,
  DatabaseReference,
  DataSnapshot,
} from "firebase/database";

export class ChatService {
  static async sendMessage(
    chatId: string,
    userId: string,
    message: string
  ): Promise<DatabaseReference> {
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
  static subscribeToMessages(
    chatId: string,
    callback: (
      messages: Array<{
        id: string;
        text: string;
        senderId: string;
        timestamp: number;
        status: string;
      }>
    ) => void
  ): () => void {
    const messagesRef = ref(database, `chats/${chatId}/messages`);
    const recentMessagesQuery = query(messagesRef, limitToLast(50));

    const unsubscribe = onValue(
      recentMessagesQuery,
      (snapshot: DataSnapshot) => {
        const messages: Array<{
          id: string;
          text: string;
          senderId: string;
          timestamp: number;
          status: string;
        }> = [];

        snapshot.forEach((child) => {
          messages.push({ id: child.key as string, ...child.val() });
        });

        callback(messages);
      }
    );

    return unsubscribe;
  }
}
