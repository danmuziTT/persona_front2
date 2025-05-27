import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import CameraIcon from '../../assets/icons/CameraIcon';

interface Props {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      {/* 감정 인식중 텍스트 (읽기 전용) */}
      <View style={styles.emotionRecognitionWrapper}>
        <Text style={styles.emotionRecognitionText}>사용자의 감정 인식중</Text>
      </View>

      {/* 입력창과 버튼 영역 */}
      <View style={styles.inputArea}>
        <TouchableOpacity style={styles.iconButton} onPress={() => { /* 카메라 토글 없음 */ }}>
          <CameraIcon color="#333" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="메시지를 입력하세요"
          value={text}
          onChangeText={setText}
          multiline={false}
        />
        <TouchableOpacity
          onPress={handleSend}
          style={styles.button}
        >
          <Text style={styles.buttonText}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FAEDFA',
  },
  emotionRecognitionWrapper: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  emotionRecognitionText: {
    fontSize: 16,
    color: '#666',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 8,
    height: 40,
  },
  iconButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 8,
    height: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});
