import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  placeholder?: string;
}

export default function InputField({ label, value, onChangeText, secureTextEntry, placeholder }: InputFieldProps) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  label: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
    width: 80,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    fontSize: 20,
    flex: 1,
  },
});
