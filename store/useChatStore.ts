import { create } from 'zustand';

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface ChatRoom {
  id: string;
  messages: Message[];
}

interface ChatStore {
  chatRooms: Record<string, ChatRoom>;
  sendMessage: (roomId: string, message: Message) => void;
  createRoomIfNotExists: (roomId: string) => void;
  removeChatRoom: (roomId: string) => void; // ✅ 삭제 함수 추가
}

export const useChatStore = create<ChatStore>((set) => ({
  chatRooms: {},

  sendMessage: (roomId, message) =>
    set((state) => {
      const existingMessages = state.chatRooms[roomId]?.messages || [];
      return {
        chatRooms: {
          ...state.chatRooms,
          [roomId]: {
            id: roomId,
            messages: [...existingMessages, message],
          },
        },
      };
    }),

  createRoomIfNotExists: (roomId) =>
    set((state) => {
      if (state.chatRooms[roomId]) return state;
      return {
        chatRooms: {
          ...state.chatRooms,
          [roomId]: {
            id: roomId,
            messages: [],
          },
        },
      };
    }),

  removeChatRoom: (roomId) => // ✅ 삭제 구현
    set((state) => {
      const newChatRooms = { ...state.chatRooms };
      delete newChatRooms[roomId];
      return { chatRooms: newChatRooms };
    }),
}));
