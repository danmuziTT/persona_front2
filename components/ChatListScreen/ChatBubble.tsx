import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ChatBubble() {
  return <View style={styles.placeholder} />;
}

const styles = StyleSheet.create({
  placeholder: {
    height: 0, // 높이 없애서 화면에서 안 보이게
  },
});
