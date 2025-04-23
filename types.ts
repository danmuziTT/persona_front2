// types.ts

export type RootStackParamList = {
    Intro: undefined;
    Login: undefined;
    Signup: undefined;
    NewPersona: undefined; //로그인 후 데이터 넘겨서 저장할 것. 테스트 용이므로 비워놓음
    PersonaDetail: { type: string }; //유형 넘길 것 
  };
  