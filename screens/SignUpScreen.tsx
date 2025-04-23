import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import LinearGradient from 'react-native-linear-gradient';

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

    //서버와 연결 후 회원가입 완료시키기
    //Alert.alert('회원가입 성공', `아이디: ${id}\n닉네임: ${nickname}`);
    navigation.navigate('Login'); //회원가입 후 로그인 창으로 이동 
  };

  const handleIdDuplicateCheck = () => {
    Alert.alert('아이디 중복 체크', '아이디를 확인 중입니다.');
  };

  const handleNicknameDuplicateCheck = () => {
    Alert.alert('닉네임 중복 체크', '닉네임을 확인 중입니다.');
  };

  return (
    <LinearGradient colors={['#DEE5F6', '#FAEDFA']} style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>아이디 :</Text>
          <TextInput
            style={styles.input}
            placeholder="아이디 입력"
            value={id}
            onChangeText={setId}
          />
          <TouchableOpacity style={styles.roundButton} onPress={handleIdDuplicateCheck}>
            <Text style={styles.buttonText}>중복확인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>비밀번호 :</Text>
          <TextInput
            style={styles.input}
            placeholder="비밀번호 입력"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>비밀번호 확인 :</Text>
          <TextInput
            style={styles.input}
            placeholder="비밀번호 확인"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>닉네임 :</Text>
          <TextInput
            style={styles.input}
            placeholder="닉네임 입력"
            value={nickname}
            onChangeText={setNickname}
          />
          <TouchableOpacity style={styles.roundButton} onPress={handleNicknameDuplicateCheck}>
            <Text style={styles.buttonText}>중복확인</Text>
          </TouchableOpacity>
        </View>

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
  roundButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
