import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  children: string;
};

const MenuTextName = ({ children }: Props) => {
  // 이름 추출
  const match = children.match(/내 이름은 (.+) 입니다\./);
  const name = match?.[1] || '';
  const before = '내 이름은 ';
  const after = ' 입니다.';

  return (
    <Text style={styles.text}>
      {before}
      <Text style={styles.highlight}>{name}</Text>
      {after}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    color: '#333',
  },
  highlight: { //이름강조 부분
    // color: '#ff5555',
    fontWeight: '900',
    textShadowColor: '#333', // 테두리 색
    //textShadowOffset: { width: 1, height: 1 },
    //textShadowRadius: 1,
  },
});

export default MenuTextName;
