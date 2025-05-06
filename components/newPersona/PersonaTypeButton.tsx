// components/PersonaTypeButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  type: string;
  color: string;
  onPress: (type: string) => void;
};

const PersonaTypeButton = ({ type, color, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => onPress(type)}
    >
      <Text style={styles.buttonText}>{type} 형</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    width: '48%',
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
  },
});

export default PersonaTypeButton;
