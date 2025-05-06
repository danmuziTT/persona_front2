import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  selectedGender: string | null;
  onSelect: (gender: string) => void;
  activeColor: string;
};

const GenderSelector = ({ selectedGender, onSelect, activeColor }: Props) => (
  <View style={styles.buttonRow}>
    {['남성', '여성'].map((gender) => (
      <TouchableOpacity
        key={gender}
        style={[
          styles.roundButton,
          selectedGender === gender && { backgroundColor: activeColor },
        ]}
        onPress={() => onSelect(gender)}
      >
        <Text style={styles.buttonText}>{gender}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  roundButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 10,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default GenderSelector;
