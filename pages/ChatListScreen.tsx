import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useChatStore } from '../store/useChatStore';
import LinearGradient from 'react-native-linear-gradient';
import ScreenWrapper from '../layouts/ScreenWrapper';

type ChatListNavigationProp = StackNavigationProp<RootStackParamList, 'ChatList'>;

export default function ChatListScreen() {
  const navigation = useNavigation<ChatListNavigationProp>();
  const chatRooms = useChatStore(state => state.chatRooms);
  const roomIds = Object.keys(chatRooms);

  return (
    <ScreenWrapper>
      <LinearGradient colors={['#DEE5F6', '#FAEDFA']} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>채팅 내역</Text>
          <FlatList
            data={roomIds}
            keyExtractor={(roomId) => roomId}
            renderItem={({ item: roomId }) => {
              const room = chatRooms[roomId];
              const lastMessage = room?.messages[room.messages.length - 1]?.text || '(대화 없음)';
              return (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => navigation.navigate('ChatRoom', { roomId })}
                >
                  <Text style={styles.message}>{lastMessage}</Text>
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={
              <Text style={styles.empty}>대화 내역이 없습니다.</Text>
            }
          />
        </View>
      </LinearGradient>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 16,
    backgroundColor: '#d6e4ff',
    borderRadius: 12,
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
  },
  empty: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
    marginTop: 32,
  },
});
