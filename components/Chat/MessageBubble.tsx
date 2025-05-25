import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  isUser: boolean;
}

export default function ChatBubble({ text, isUser }: Props) {
  return (
    <View style={[styles.bubbleContainer, isUser ? styles.user : styles.ai]}>
      <Text style={styles.bubble}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubbleContainer: {
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  user: {
    alignSelf: 'flex-end',
  },
  ai: {
    alignSelf: 'flex-start',
  },
  bubble: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 16,
  },
});
