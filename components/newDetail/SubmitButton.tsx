import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  enabled: boolean;
  backgroundColor: string;
};

const SubmitButton = ({ onPress, enabled, backgroundColor }: Props) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: enabled ? backgroundColor : '#ccc' }]}
    disabled={!enabled}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>새 페르소나와 채팅하기</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '80%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SubmitButton;
