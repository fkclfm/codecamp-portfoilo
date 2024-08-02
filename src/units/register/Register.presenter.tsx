import * as R from "./Register.styled";
import { IRegisterUIProps } from "./Register.types";

export default function RegisterPageUI(props: IRegisterUIProps) {
  return (
    <R.Wrapper>
      <R.LoginCard>
        <R.LoginHeader>회원가입</R.LoginHeader>
        <R.LoginWrapper>
          <R.RegisterBox>
            이메일:{" "}
            <R.LoginInput
              id="email"
              type="text"
              onChange={props.onChangeInputs}
            ></R.LoginInput>
          </R.RegisterBox>
          <R.RegisterBox>
            비밀번호:{" "}
            <R.PasswordInput
              id="password"
              type="password"
              onChange={props.onChangeInputs}
            ></R.PasswordInput>
          </R.RegisterBox>
          <R.RegisterBox>
            닉네임:{" "}
            <R.LoginInput
              id="name"
              type="text"
              onChange={props.onChangeInputs}
            ></R.LoginInput>
          </R.RegisterBox>
        </R.LoginWrapper>
        <R.RegisterButton onClick={props.onClickRegister}>
          회원가입
        </R.RegisterButton>
      </R.LoginCard>
    </R.Wrapper>
  );
}
