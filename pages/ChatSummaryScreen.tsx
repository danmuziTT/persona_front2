import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useChatStore } from '../store/useChatStore';
import BottomNavBar from '../layouts/BottomNavBar';

type ChatSummaryRouteProp = RouteProp<RootStackParamList, 'ChatSummary'>;

export default function ChatSummaryScreen() {
  const route = useRoute<ChatSummaryRouteProp>();
  const roomId = route?.params?.roomId;

  const chatRoom = useChatStore((state) =>
    roomId ? state.chatRooms[roomId] : undefined
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>채팅 요약</Text>

        {!roomId && (
          <Text style={styles.notice}>roomId가 없어 기본 내용을 표시합니다.</Text>
        )}

        {chatRoom ? (
          <>
            <Text>총 메시지: {chatRoom.messages.length}</Text>
            <Text style={styles.summary}>
              {chatRoom.messages.map((msg) => `• ${msg.text}`).join('\n')}
            </Text>
          </>
        ) : (
          <Text>해당 채팅방 내용을 찾을 수 없습니다.</Text>
        )}
      </View>

      {/* ✅ 네비게이션 바 하단 고정 */}
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 100, // 하단 바를 위해 여유 줌
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  notice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  summary: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
});
