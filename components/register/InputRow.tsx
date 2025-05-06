import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const InputRow = ({ label, value, onChangeText, placeholder, secureTextEntry }: Props) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
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
});

export default InputRow;
