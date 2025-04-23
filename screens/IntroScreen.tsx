import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; // 경로는 프로젝트 구조에 맞게 유지
import LinearGradient from 'react-native-linear-gradient'; // 그라데이션 임포트

type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;

function IntroScreen(): React.JSX.Element {
  const navigation = useNavigation<IntroScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#DEE5F6', '#FAEDFA']} 
      style={styles.container}
    >
      <Text style={styles.text}>Persona Talk</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default IntroScreen;
