import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  children: string;
};

const LabelText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',  
    marginBottom: 10,    
    marginTop: 20, 
    color: '#333',      
  },
});

export default LabelText;
