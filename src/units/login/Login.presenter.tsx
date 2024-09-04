import { useMoveToPage } from "../../components/commons/hooks/customs/useMoveToPage";
import * as L from "./Login.styled";
import { ILoginUIProps } from "./Login.types";

export default function LoginPageUI(props: ILoginUIProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <L.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <L.LoginCard>
          <L.LoginHeader>HIPLP</L.LoginHeader>
          <L.LoginWrapper>
            <L.LoginBox>
              <L.LoginSpan>이메일</L.LoginSpan>
              <L.Input type="text" {...props.register("email")}></L.Input>
            </L.LoginBox>
            <L.Error>{props.formState.errors.email?.message}</L.Error>
            <L.LoginBox>
              <L.LoginSpan>비밀번호</L.LoginSpan>
              <L.Input
                type="password"
                {...props.register("password")}
              ></L.Input>
            </L.LoginBox>
            <L.Error>{props.formState.errors.password?.message}</L.Error>
          </L.LoginWrapper>
          <L.LoginButton>로그인</L.LoginButton>
          <L.RegisterButton onClick={onClickMoveToPage("/register")}>
            회원가입
          </L.RegisterButton>
        </L.LoginCard>
      </form>
    </L.Wrapper>
  );
}
