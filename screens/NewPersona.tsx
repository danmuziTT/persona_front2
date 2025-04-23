import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';  // types.ts에서 가져옴

type NavigationProp = StackNavigationProp<RootStackParamList, 'NewPersona'>;

const CentralTextButtonsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (type: string) => {
    navigation.navigate('PersonaDetail', { type }); // 이제 오류 안남
  };

  return (
    <LinearGradient colors={['#DEE5F6', '#FAEDFA']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>페르소나톡</Text>
          <Text style={styles.text}>당신만의 성격을 선택하고,</Text>
          <Text style={styles.text}>맞춤형 AI와 대화 시작하기.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonD} onPress={() => handlePress('D')}>
            <Text style={styles.buttonText}>D 형</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonI} onPress={() => handlePress('I')}>
            <Text style={styles.buttonText}>I 형</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonS} onPress={() => handlePress('S')}>
            <Text style={styles.buttonText}>S 형</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonC} onPress={() => handlePress('C')}>
            <Text style={styles.buttonText}>C 형</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  // 전체 화면을 가득 채우고 중앙 정렬
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  textContainer: {
    alignItems: 'center', // 텍스트를 중앙에 정렬
    marginBottom: 40, // 버튼과 텍스트 간의 간격
  },


  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20, // 텍스트 간의 간격
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 7, // 텍스트 간의 간격
  },

  // 버튼을 두 줄로 배치
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // 버튼들 좌우 끝 정렬
    width: '100%',
    paddingHorizontal: 15, // 양쪽 여백
  },
  
  // 버튼 스타일
  buttonD: {
    backgroundColor: '#FFD2D2',
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15, // 버튼 간의 세로 간격
    width: '48%', // 버튼 너비를 45%로 설정하여 2개씩 배치
  },
  buttonI: {
    backgroundColor: '#F7F6BC',
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15, // 버튼 간의 세로 간격
    width: '48%', // 버튼 너비를 45%로 설정하여 2개씩 배치
  },
  buttonS: {
    backgroundColor: '#CEF4D6',
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15, // 버튼 간의 세로 간격
    width: '48%', // 버튼 너비를 45%로 설정하여 2개씩 배치
  },
  buttonC: {
    backgroundColor: '#CCD2F6',
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15, // 버튼 간의 세로 간격
    width: '48%', // 버튼 너비를 45%로 설정하여 2개씩 배치
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
  },
});

export default CentralTextButtonsScreen;
