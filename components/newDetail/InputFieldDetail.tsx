import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
};

const InputField = ({value, onChangeText, placeholder, keyboardType = 'default' }: Props) => (
  <>
    <TextInput
      style={[styles.inputGroup, { paddingLeft: 10 }]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  </>
);

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 5,
    height: 40,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 4,
  },
});

export default InputField; 