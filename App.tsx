import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

import IntroScreen from './pages/IntroScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignUpScreen';
import NewPersona from './pages/NewPersona';
import PersonaDetail from './pages/PersonaDetail';  
import ChatListScreen from './pages/ChatListScreen';
import ChatRoomScreen from './pages/ChatRoomScreen';
import ChatSummaryListScreen from './pages/ChatSummaryListScreen';
import ChatSummaryScreen from './pages/ChatSummaryScreen';
import profileSetting from './pages/profileSetting'

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="NewPersona"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="NewPersona"
            component={NewPersona}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#DEE5F6',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'normal',
              },
              headerTitle: () => null,
              headerLeft: () => null,
            }}
          />
          <Stack.Screen
            name="ChatRoom"
            component={ChatRoomScreen}
            options={({ navigation }) => ({
              headerShown: true,
              headerStyle: {
                backgroundColor: '#DEE5F6',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'normal',
              },
              headerTitle: () => null,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChatList')}
                  style={{ marginLeft: 15 }}
                >
                  <Text style={{ fontSize: 16, color: '#000' }}>{'<'} 뒤로</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="profileSetting"
            component={profileSetting}
            options={({ navigation }) => ({
              headerShown: true,
              headerTitle: '이미지 수정하기',
              headerTitleAlign: 'center',
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingHorizontal: 15 }}
                  onPress={() => navigation.navigate('NewPersona')}
                >
                  <Text style={{ color: '#007aff', fontSize: 17 }}>뒤로</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="ChatList"
            component={ChatListScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTitleAlign: 'center',
              headerLeft: () => null,
              headerStyle: {
                backgroundColor: '#DEE5F6',
              },
            }}
          />
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="ChatSummaryList" component={ChatSummaryListScreen} />
          <Stack.Screen name="ChatSummary" component={ChatSummaryScreen} />
          <Stack.Screen name="PersonaDetail" component={PersonaDetail} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* ✅ 여기에 Toast 추가 */}
      <Toast />
    </>
  );
}

export default App;
