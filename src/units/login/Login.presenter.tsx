import * as L from "./Login.styled";
import { ILoginUIProps } from "./Login.types";

export default function LoginPageUI(props: ILoginUIProps) {
  return (
    <L.Wrapper>
      <L.LoginCard>
        <L.LoginHeader>로그인</L.LoginHeader>
        <L.LoginWrapper>
          <L.LoginBox>
            이메일:{" "}
            <L.LoginInput
              type="text"
              onChange={props.onChangeEmail}
            ></L.LoginInput>
          </L.LoginBox>
          <L.LoginBox>
            비밀번호:{" "}
            <L.PasswordInput
              type="password"
              onChange={props.onChangePassword}
            ></L.PasswordInput>
          </L.LoginBox>
        </L.LoginWrapper>
        <L.LoginButton onClick={props.onClickLogin}>로그인</L.LoginButton>
        <L.RegisterButton onClick={props.onClickMoveRegister}>
          회원가입
        </L.RegisterButton>
      </L.LoginCard>
    </L.Wrapper>
  );
}
