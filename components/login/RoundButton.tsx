import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface RoundButtonProps {
  title: string;
  onPress: () => void;
}

export default function RoundButton({ title, onPress }: RoundButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    margin: 15,
    width: 150,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
