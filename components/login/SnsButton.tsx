import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SnsButtonProps {
  title: string;
  color: string;
  onPress: () => void;
}

export default function SnsButton({ title, color, onPress }: SnsButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    minWidth: 90,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#000',
    fontWeight: '600',
  },
});
