import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import LinearGradient from 'react-native-linear-gradient';

import InputRow from '../components/register/InputRow';
import InputRowWithButton from '../components/register/InputRowWithButton';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignup = () => {
    if (!id || !password || !confirmPassword || !nickname) {
      Alert.alert('입력 오류', '모든 필드를 채워주세요.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('비밀번호 오류', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <LinearGradient colors={['#DEE5F6', '#FAEDFA']} style={styles.container}>
      <InputRowWithButton
        label="아이디 :"
        value={id}
        onChangeText={setId}
        placeholder="아이디 입력"
        buttonText="중복확인"
        onPress={() => Alert.alert('아이디 중복 체크')}
      />
      <InputRow
        label="비밀번호 :"
        value={password}
        onChangeText={setPassword}
        placeholder="비밀번호 입력"
        secureTextEntry
      />
      <InputRow
        label="비밀번호 확인 :"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="비밀번호 확인"
        secureTextEntry
      />
      <InputRowWithButton
        label="닉네임 :"
        value={nickname}
        onChangeText={setNickname}
        placeholder="닉네임 입력"
        buttonText="중복확인"
        onPress={() => Alert.alert('닉네임 중복 체크')}
      />
      <TouchableOpacity style={styles.roundButtonRegister} onPress={handleSignup}>
        <Text style={styles.buttonTextRegister}>회원가입</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButtonRegister: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonTextRegister: {
    color: '#fff',
    fontSize: 16,
  },
});
