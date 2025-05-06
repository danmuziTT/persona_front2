import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

const TextSection = ({ title, subtitle, description }: Props) => (
  <View style={styles.textContainer}>
    <Text style={styles.textTitle}>{title}</Text>
    <Text style={styles.text}>{subtitle}</Text>
    <Text style={styles.text}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 7,
  },
});

export default TextSection;
