import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { ChatService } from "@/service/chat";
import { useRouter } from "next/router";
import { DatabaseReference } from "firebase/database";

interface ChatContextType {
  currentChat: { id: string } | null;
  setCurrentChat: (chat: { id: string } | null) => void;
  messages: Array<{
    id: string;
    text: string;
    senderId: string;
    timestamp: number;
    status: string;
  }>;
  sendMessage: (
    chatId: string,
    userId: string,
    message: string
  ) => Promise<DatabaseReference>;
}

// Tạo context với giá trị mặc định là `undefined`
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Hook tùy chỉnh để sử dụng context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

// Props cho ChatProvider
interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [currentChat, setCurrentChat] = useState<{ id: string } | null>(null);
  const [messages, setMessages] = useState<
    Array<{
      id: string;
      text: string;
      senderId: string;
      timestamp: number;
      status: string;
    }>
  >([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id && typeof id === "string") {
      setCurrentChat({ id });
    }
  }, [id]);

  useEffect(() => {
    if (currentChat?.id) {
      const unsubscribe = ChatService.subscribeToMessages(
        currentChat.id,
        setMessages
      );
      return () => unsubscribe();
    }
  }, [currentChat]);

  const value: ChatContextType = {
    currentChat,
    setCurrentChat,
    messages,
    sendMessage: ChatService.sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
