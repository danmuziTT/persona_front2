import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useChatStore } from '../store/useChatStore';
import ScreenWrapper from '../layouts/ScreenWrapper';

type ChatSummaryRouteProp = RouteProp<RootStackParamList, 'ChatSummary'>;

export default function ChatSummaryScreen() {
  const route = useRoute<ChatSummaryRouteProp>();
  const { roomId } = route.params;
  const chatRoom = useChatStore((state) => state.chatRooms[roomId]);

  if (!chatRoom) {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.header}>채팅 요약</Text>
          <Text style={styles.subtext}>해당 채팅방 내용을 찾을 수 없습니다.</Text>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.header}>채팅 요약</Text>
        <Text style={styles.subtext}>roomId: {roomId}</Text>
        <Text style={styles.subtext}>총 메시지 수: {chatRoom.messages.length}</Text>
        {/* 여기에 더 많은 요약 정보 넣을 수 있음 */}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtext: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
});
