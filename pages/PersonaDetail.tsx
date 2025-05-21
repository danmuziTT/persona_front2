import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, PersonaType } from '../types';
import LinearGradient from 'react-native-linear-gradient';
import { useIsFocused } from '@react-navigation/native';

import InputField from '../components/newDetail/InputFieldDetail';
import GenderSelector from '../components/newDetail/GenderSelector';
import SubmitButton from '../components/newDetail/SubmitButton';
import MenuText from '../components/newDetail/MenuText';
import MenuTextName from '../components/newDetail/MenuTextName.tsx';

type Props = { 
  route: RouteProp<RootStackParamList, 'PersonaDetail'>;
};

const PersonaDetail = ({ route }: Props) => {
  const { type } = route.params;

  const colorMap: Record<PersonaType, string> = {
    D: '#FFD2D2',
    I: '#F7F6BC',
    S: '#CEF4D6',
    C: '#CCD2F6',
  };

  const colorMapSelecd = {
    D: '#fc8282',
    I: '#e7e544',
    S: '#73dd88',
    C: '#6c7ee4',
  } as const;

  const backgroundColor = colorMap[type];
  const selectedColor = colorMapSelecd[type];

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAgeChange = (input: string) => {
    const numericInput = input.replace(/[^0-9]/g, '');
    setAge(numericInput);
  };

  const isButtonEnabled = name && age && selectedGender;

  const handlePressSubmit = () => {
    setModalVisible(true);
  };

  const generateRandomName = (length: number = 3) => { //뒤로갔다올때 오류나는거 수정 (바뀌는건 바뀌는데 오류메세지는 뜸 )
    const lastName = ['가', '간', '갈', '감', '강', '견', '경', '계', '고', '공', '곽', '구', '국', '궁', '궉', '권', '근', '금', '기', '길', '김', '나', '남', '남궁', '낭', '내', '노', '단', '당', '대', '도', '독고', '돈', '동', '동방', '두', '라', '랑', '류', '리', '마', '만', '매', '맹', '명', '모', '목', '묵', '문', '민', '박', '반', '방', '배', '백', '범', '변', '복', '봉', '부', '빈', '빙', '사', '사공', '상', '서', '서문', '석', '선', '선우', '설', '성', '소', '손', '송', '순', '승', '시', '신', '심', '아', '안', '양', '어', '엄', '여', '연', '염', '예', '오', '옥', '온', '옹', '왕', '용', '우', '운', '원', '위', '유', '육', '윤', '음', '이', '인', '임', '장', '전', '좀', '제', '제갈', '조', '종', '좌', '주', '지', '진', '차', '창', '채', '천', '초', '최', '추', '탁', '탄', '태', '판', '팽', '편', '평', '표', '풍', '피', '필', '하', '한', '함', '해', '허', '현', '형', '호', '홍', '화', '환', '황', '황보', '흥'];
    const firstName = ['건', '균', '일', '익', '종', '범', '수', '성', '승', '식', '언', '배', '훈', '휘', '완', '원', '운', '재', '기', '필', '한', '태', '길', '근', '권', '국', '구', '교', '곤', '걸', '표', '학', '후', '록', '연', '정', '영', '현', '주', '린', '빈', '혜', '채', '예', '반', '석', '은', '지','진', '의'];

    const randomFrom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const last = randomFrom(lastName) + ' ';

    // 중복 방지를 위한 Set
    const used = new Set<string>();
    let first = '';

    while (first.length < length - 1) {
      const char = randomFrom(firstName);
      if (!used.has(char)) {
        used.add(char);
        first += char;
      }
    }

    return last + first;
  };

  const handleRandomName = () => {
    const randomName = generateRandomName();
    setName(randomName);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      handleRandomName(); // 포커스 시마다 이름 재생성
    }
  }, [isFocused]);

  return (
    <LinearGradient colors={['#FFFFFF', backgroundColor]} style={styles.container}>
      <View style={styles.middleContent}>
      <MenuTextName>{'내 이름은 ' + (name) + ' 입니다.'}</MenuTextName> {/* 이름만 강조되게 만들기 */}

        <MenuText>나이</MenuText>
        <InputField value={age} onChangeText={handleAgeChange} placeholder="나이 입력" keyboardType="numeric" />

        <MenuText>성별</MenuText>
        <GenderSelector selectedGender={selectedGender} onSelect={setSelectedGender} activeColor={selectedColor} />
      </View>
      <View style={styles.bottomButton}>
        <SubmitButton onPress={handlePressSubmit} enabled={!!isButtonEnabled} backgroundColor={selectedColor} />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  middleContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  bottomButton: { alignItems: 'center', paddingBottom: 40 },
});

export default PersonaDetail;
