import React, { createContext, useState, useContext, useEffect } from "react";
import { ChatService } from "@/service/chat";
import { useRouter } from "next/router";
const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      setCurrentChat({ id });
    }
  }, [id]);
  useEffect(() => {
    if (currentChat?.id) {
      console.log(currentChat?.id, "currentChat?.idcurrentChat?.id");
      const unsubscribe = ChatService.subscribeToMessages(
        currentChat?.id,
        setMessages
      );
      return () => unsubscribe();
    }
  }, [currentChat]);

  const value = {
    currentChat,
    setCurrentChat,
    messages,
    sendMessage: ChatService.sendMessage,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
