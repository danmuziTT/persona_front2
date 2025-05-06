import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import LinearGradient from 'react-native-linear-gradient';

import TitleText from '../components/intro/TitleText';

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
    <LinearGradient colors={['#DEE5F6', '#FAEDFA']} style={styles.container}>
      <TitleText>Persona Talk</TitleText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen;
