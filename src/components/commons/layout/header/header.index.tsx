import {
  Wrapper,
  LoginBtn,
  RegisterBtn,
  LogoutBtn,
  LoginBox,
  Title,
  Container,
  HeaderBar,
  Username,
  UsernameBox,
} from "./header.styled";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import { IQuery } from "../../../../commons/type/generated/types";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores/GlobalState";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

export default function Header() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    if (result) {
      setAccessToken(result);
    }
    // 다크 모드 활성화 여부
    if (router.asPath === "/") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [router.asPath]);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    router.push("/");
  };

  const header = [
    { page: "/firebase", name: "FIREBASE" },
    { page: "/boards", name: "BOARD" },
    { page: "/market/", name: "STORE" },
    { page: "/mypage", name: "MYPAGE" },
  ];

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Title href="/main" isDarkMode={isDarkMode}>
        HIPLP
      </Title>
      <Container>
        {header.map((el, index) => (
          <>
            <HeaderBar onClick={onClickMoveToPage(`${el.page}`)} key={index}>
              {el.name}
            </HeaderBar>
          </>
        ))}
      </Container>
      {accessToken !== "" ? (
        <LoginBox isDarkMode={isDarkMode}>
          <UsernameBox>
            <Username>{data?.fetchUserLoggedIn.name}</Username>
            <span style={{ fontWeight: "700" }}>님</span>
          </UsernameBox>
          <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>
        </LoginBox>
      ) : (
        <LoginBox isDarkMode={isDarkMode}>
          <LoginBtn href="/login" isDarkMode={isDarkMode}>
            로그인
          </LoginBtn>
          <RegisterBtn href="register" isDarkMode={isDarkMode}>
            회원가입
          </RegisterBtn>
        </LoginBox>
      )}
    </Wrapper>
  );
}
