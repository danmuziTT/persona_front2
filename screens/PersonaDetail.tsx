import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  route: RouteProp<RootStackParamList, 'PersonaDetail'>;
};

const PersonaDetail = ({ route }: Props) => {
  const { type } = route.params;

  const colorMap = {
    D: '#FFD2D2',
    I: '#F7F6BC',
    S: '#CEF4D6',
    C: '#CCD2F6',
  } as const;

  const colorMapSelecd = {
    D: '#fc8282',
    I: '#e7e544',
    S: '#73dd88',
    C: '#6c7ee4',
  } as const;

  type PersonaType = keyof typeof colorMap;
  const backgroundColor = colorMap[type as PersonaType];
  const backgroundColorSelected = colorMapSelecd[type as PersonaType];

  // 입력 상태 관리
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  // 성별 선택 함수
  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  // 나이 입력 시 숫자만 허용
  const handleAgeChange = (input: string) => {
    const numericInput = input.replace(/[^0-9]/g, ''); // 숫자만 남기고 제거
    setAge(numericInput);
  };

  // 버튼 활성화 여부 체크
  const isButtonEnabled = name && age && selectedGender;

  // 버튼 색상 동적 변경
  const getButtonColor = () => {
    if (selectedGender === '남성') {
      return backgroundColorSelected;
    } else if (selectedGender === '여성') {
      return backgroundColorSelected;
    }
    return '#ccc'; // 기본 색상
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', backgroundColor]}
      style={styles.container}
    >
      {/* 중앙 콘텐츠 영역 */}
      <View style={styles.middleContent}>
        <View style={styles.label}>
          <Text style={styles.label}>페르소나 이름 :</Text>
        </View>
        <TextInput
          style={[styles.inputGroup, { paddingLeft: 10 }]}
          placeholder="이름 입력"
          value={name}
          onChangeText={setName}
        />

        <View style={styles.label}>
          <Text style={styles.label}>페르소나 나이 :</Text>
        </View>
        <TextInput
          style={[styles.inputGroup, { paddingLeft: 10 }]}
          placeholder="나이 입력"
          value={age}
          onChangeText={handleAgeChange}
          keyboardType="numeric" // 숫자만 입력하도록 설정
        />

        <View style={styles.label}>
          <Text style={styles.label}>페르소나 성별 :</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.roundButton,
              selectedGender === '남성' && { backgroundColor: backgroundColorSelected },
            ]}
            onPress={() => handleGenderSelect('남성')}
          >
            <Text style={styles.buttonText}>남성</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.roundButton,
              selectedGender === '여성' && { backgroundColor: backgroundColorSelected },
            ]}
            onPress={() => handleGenderSelect('여성')}
          >
            <Text style={styles.buttonText}>여성</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 하단 버튼 영역 */}
      <View style={styles.bottomButton}>
        <TouchableOpacity
          style={[styles.btnNewPersona, { backgroundColor: isButtonEnabled ? getButtonColor() : '#ccc' }]}
          disabled={!isButtonEnabled} // 버튼 비활성화 조건 추가
        >
          <Text style={styles.buttonTextPresona}>새 페르소나와 채팅하기</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // 상단/중앙/하단 분리
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '100%',
    marginLeft: 40,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
    height: 30,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 4,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  bottomButton: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  btnNewPersona: {
    width: '80%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextPresona: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PersonaDetail;
