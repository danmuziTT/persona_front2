import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  text: string;
  isUser: boolean;
  timestamp: number;
  discType?: 'D' | 'I' | 'S' | 'C'; // DISC 유형
}

export default function ChatBubble({ text, isUser, timestamp, discType = 'D' }: Props) {
  const formattedTime = new Date(timestamp).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const avatarImages = { //새 페르소나 생성 후 채팅창 가면 이미지 변경0, 채팅리스트에서 채팅창 이동 시 이미지 D로 밀림. 수정할것 
    D: require('../../assets/DISC_IMG/D_IMG.jpeg'),
    I: require('../../assets/DISC_IMG/I_IMG.jpeg'),
    S: require('../../assets/DISC_IMG/S_IMG.jpeg'),
    C: require('../../assets/DISC_IMG/C_IMG.jpeg'),
  };
  
  const getAvatarImage = (type: 'D' | 'I' | 'S' | 'C') => {
    return avatarImages[type] || avatarImages.D;
  };

  if (isUser) {
    // 사용자 메시지 - 시간과 버블 한 줄에 표시
    return (
      <View style={[styles.rowContainer, styles.rowReverse]}>
        <Text style={styles.time}>{formattedTime}</Text>
        <View style={[styles.bubble, styles.bubbleUser]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    );
  }

  // AI 메시지 - AI 이름은 따로 한 줄, 아래 한 줄에 아바타 + 버블 + 시간 표시
  return (
    <>
      <View style={styles.aiNameContainer}>
        <Text style={styles.aiName}>AI</Text>
      </View>
      <View style={[styles.rowContainer, styles.row]}>
        <Image source={getAvatarImage(discType)} style={styles.avatar} />
        <View style={[styles.bubble, styles.bubbleAI]}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.time}>{formattedTime}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  row: {
    justifyContent: 'flex-start',
  },
  rowReverse: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '75%',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  bubbleUser: {
    backgroundColor: '#DCF8C6',
  },
  bubbleAI: {
    backgroundColor: '#FFF5C6',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  time: {
    fontSize: 10,
    color: '#666',
    marginHorizontal: 6,
    marginBottom: 2,
  },
  aiNameContainer: {
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  aiName: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
});
