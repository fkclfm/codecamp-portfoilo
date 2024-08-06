import * as L from "./Login.styled";
import { ILoginUIProps } from "./Login.types";

export default function LoginPageUI(props: ILoginUIProps) {
  return (
    <L.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <L.LoginCard>
          <L.LoginHeader>로그인</L.LoginHeader>
          <L.LoginWrapper>
            <L.LoginBox>
              이메일:{" "}
              <L.LoginInput
                type="text"
                {...props.register("email")}
              ></L.LoginInput>
            </L.LoginBox>
            <L.Error>{props.formState.errors.email?.message}</L.Error>
            <L.LoginBox>
              비밀번호:{" "}
              <L.PasswordInput
                type="password"
                {...props.register("password")}
              ></L.PasswordInput>
            </L.LoginBox>
            <L.Error>{props.formState.errors.password?.message}</L.Error>
          </L.LoginWrapper>
          <L.LoginButton>로그인</L.LoginButton>
          <L.RegisterButton onClick={props.onClickMoveRegister}>
            회원가입
          </L.RegisterButton>
        </L.LoginCard>
      </form>
    </L.Wrapper>
  );
}
