import { useMutation } from "@apollo/client";
import LoginPageUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../commons/type/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/stores/GlobalState";
import { ILoginForm } from "./Login.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../commons/schema/schema";

export default function LoginPage() {
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickLogin = async (data: ILoginForm) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessTokens = result.data?.loginUser.accessToken;
      if (accessTokens) {
        setAccessToken(accessTokens);
        localStorage.setItem("accessToken", accessTokens);
      } else {
        Modal.error({ content: "로그인 토큰이 없습니다. 다시 시도해주세요." });
      }
      Modal.success({ content: "로그인에 성공하였습니다." });
      router.push("/");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "로그인에 실패하였습니다. 다시 시도해주세요" });
    }
  };

  return (
    <LoginPageUI
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
