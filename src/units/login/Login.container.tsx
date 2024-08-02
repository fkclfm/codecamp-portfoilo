import { useMutation } from "@apollo/client";
import LoginPageUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../commons/type/generated/types";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/stores/GlobalState";

export default function LoginPage() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onClickMoveRegister = () => {
    router.push("/register");
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessTokens = result.data?.loginUser.accessToken;
      console.log(result.data);
      if (accessTokens) {
        setAccessToken(accessTokens);
        localStorage.setItem("accessToken", accessTokens);
      } else {
        Modal.error({ content: "로그인 토큰이 없습니다. 다시 시도해주세요." });
      }
      Modal.success({ content: "로그인에 성공하였습니다." });
      console.log("Access Token:", accessToken);
      console.log("Access Tokens:", accessTokens);
      router.push("/");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "로그인에 실패하였습니다. 다시 시도해주세요" });
    }
  };

  return (
    <LoginPageUI
      onClickLogin={onClickLogin}
      onClickMoveRegister={onClickMoveRegister}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
}
