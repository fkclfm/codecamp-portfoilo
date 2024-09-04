import * as R from "./Register.styled";
import { IRegisterUIProps } from "./Register.types";

export default function RegisterPageUI(props: IRegisterUIProps) {
  return (
    <R.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickRegister)}>
        <R.RegisterCard>
          <R.RegisterHeader>회원가입</R.RegisterHeader>
          <R.RegisterWrapper>
            <R.RegisterBox>
              <R.RegisterSpan>이메일</R.RegisterSpan>
              <R.Input type="text" {...props.register("email")}></R.Input>
            </R.RegisterBox>
            <R.Error>{props.formState.errors.email?.message}</R.Error>
            <R.RegisterBox>
              <R.RegisterSpan>비밀번호</R.RegisterSpan>
              <R.Input
                type="password"
                {...props.register("password")}
              ></R.Input>
            </R.RegisterBox>
            <R.Error>{props.formState.errors.password?.message}</R.Error>
            <R.RegisterBox>
              <R.RegisterSpan>닉네임</R.RegisterSpan>
              <R.Input type="text" {...props.register("name")}></R.Input>
            </R.RegisterBox>
            <R.Error>{props.formState.errors.name?.message}</R.Error>
          </R.RegisterWrapper>
          <R.RegisterButton>회원가입</R.RegisterButton>
        </R.RegisterCard>
      </form>
    </R.Wrapper>
  );
}
