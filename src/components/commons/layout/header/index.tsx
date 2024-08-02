import {
  Wrapper,
  HeaderImg,
  HeaderMenu,
  LoginBtn,
  RegisterBtn,
  NickName,
  LogoutBtn,
  LoginBox,
} from "./header.styled";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import { IQuery } from "../../../../commons/type/generated/types";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores/GlobalState";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    if (result) {
      setAccessToken(result);
    }
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    router.push("/");
  };

  return (
    <Wrapper>
      <HeaderImg src="/images/logo.png" alt="로고" />
      <HeaderMenu>
        {accessToken !== "" ? (
          <LoginBox>
            <div>
              <NickName>{data?.fetchUserLoggedIn.name}</NickName>님 환영합니다!
            </div>
            <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>
          </LoginBox>
        ) : (
          <>
            <LoginBtn href="/login">로그인</LoginBtn>
            <RegisterBtn href="register">회원가입</RegisterBtn>
          </>
        )}
      </HeaderMenu>
    </Wrapper>
  );
}
