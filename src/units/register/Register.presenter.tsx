import * as R from "./Register.styled";
import { IRegisterUIProps } from "./Register.types";

export default function RegisterPageUI(props: IRegisterUIProps) {
  return (
    <R.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickRegister)}>
        <R.LoginCard>
          <R.LoginHeader>회원가입</R.LoginHeader>
          <R.LoginWrapper>
            <R.RegisterBox>
              이메일:{" "}
              <R.LoginInput
                type="text"
                {...props.register("email")}
              ></R.LoginInput>
            </R.RegisterBox>
            <R.Error>{props.formState.errors.email?.message}</R.Error>
            <R.RegisterBox>
              비밀번호:{" "}
              <R.PasswordInput
                type="password"
                {...props.register("password")}
              ></R.PasswordInput>
            </R.RegisterBox>
            <R.Error>{props.formState.errors.password?.message}</R.Error>
            <R.RegisterBox>
              닉네임:{" "}
              <R.LoginInput
                type="text"
                {...props.register("name")}
              ></R.LoginInput>
            </R.RegisterBox>
            <R.Error>{props.formState.errors.name?.message}</R.Error>
          </R.LoginWrapper>
          <R.RegisterButton>회원가입</R.RegisterButton>
        </R.LoginCard>
      </form>
    </R.Wrapper>
  );
}
