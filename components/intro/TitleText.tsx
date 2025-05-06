import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleTextProps {
  children: string;
}

function TitleText({ children }: TitleTextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TitleText;
