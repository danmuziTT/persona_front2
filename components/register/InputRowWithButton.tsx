import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  buttonText: string;
  onPress: () => void;
}

const InputRowWithButton = ({ label, value, onChangeText, placeholder, buttonText, onPress }: Props) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
    <TouchableOpacity style={styles.roundButton} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    width: 100,
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  roundButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default InputRowWithButton;
