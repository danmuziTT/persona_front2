import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    if (!id || !password) {
      Alert.alert('입력 오류', '아이디와 비밀번호를 모두 입력해주세요.');
    } else {
    //서버에서 아이디비번 체크 후 넘어갈 것 
      navigation.navigate('NewPersona');
    }
  };

  const handleSignup = () => navigation.navigate('Signup');

  const handleKakaoLogin = () => Alert.alert('카카오톡 로그인');
  const handleNaverLogin = () => Alert.alert('네이버 로그인');
  const handleGoogleLogin = () => Alert.alert('구글 로그인');

  return (
    <LinearGradient colors={['#DEE5F6', '#FAEDFA']} style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>ID :</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디 입력"
          value={id}
          onChangeText={setId}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>PWD :</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.roundButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.snsRow}>
        <TouchableOpacity style={[styles.snsButton, { backgroundColor: '#f6f669' }]} onPress={handleKakaoLogin}>
          <Text style={styles.snsText}>kakao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.snsButton, { backgroundColor: '#7dfc84' }]} onPress={handleNaverLogin}>
          <Text style={styles.snsText}>naver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.snsButton, { backgroundColor: '#f6b2b2' }]} onPress={handleGoogleLogin}>
          <Text style={styles.snsText}>google</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa', // 전체 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputGroup: {
    flexDirection: 'row', // 텍스트와 입력란을 가로로 배치
    alignItems: 'center', // 텍스트와 입력란의 수평 정렬
    width: '80%'
  },
  label: {
    fontSize: 20,
    marginRight: 10, // 텍스트와 입력란 사이의 간격
    fontWeight: 'bold',
    alignItems: 'center',
    width: 80,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    fontSize: 20,
    flex: 1, // 입력란이 가로 공간을 채우도록 설정
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginVertical: 20,
  },
  roundButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    margin : 15,
    width: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  snsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  snsButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    minWidth: 90,
    alignItems: 'center',
    margin : 10,
  },
  snsText: {
    color: '#000',
    fontWeight: '600',
  },
});
