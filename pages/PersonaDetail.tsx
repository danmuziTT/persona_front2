import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, PersonaType } from '../types';
import LinearGradient from 'react-native-linear-gradient';

import InputField from '../components/newDetail/InputFieldDetail'
import GenderSelector from '../components/newDetail/GenderSelector';
import SubmitButton from '../components/newDetail/SubmitButton';
import MenuText from '../components/newDetail/MenuText'

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
    setModalVisible(true);  // 버튼을 눌렀을 때 모달을 열기
  };
  
  return (
    <LinearGradient colors={['#FFFFFF', backgroundColor]} style={styles.container}>
      <View style={styles.middleContent}>
      <MenuText>이름</MenuText>
        <InputField value={name} onChangeText={setName} placeholder="이름 입력" />
        
        <MenuText>나이</MenuText>
        <InputField value={age} onChangeText={handleAgeChange} placeholder="나이 입력" keyboardType="numeric" />
        
        <MenuText>성별</MenuText>
        <GenderSelector selectedGender={selectedGender} onSelect={setSelectedGender} activeColor={selectedColor} />
      </View>
      <View style={styles.bottomButton}>
        <SubmitButton onPress={() => {}} enabled={!!isButtonEnabled} backgroundColor={selectedColor} />
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