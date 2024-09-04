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
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores/GlobalState";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

export default function Header() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
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

  const header = [
    { page: "/firebase", name: "FIREBASE" },
    { page: "/boards", name: "BOARD" },
    { page: "/market/", name: "STORE" },
    { page: "/mypage", name: "MYPAGE" },
  ];

  return (
    <Wrapper>
      <Title href="/main">HIPLP</Title>
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
        <LoginBox>
          <UsernameBox>
            <Username>{data?.fetchUserLoggedIn.name}</Username>
            <span style={{ fontWeight: "700" }}>님</span>
          </UsernameBox>
          <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>
        </LoginBox>
      ) : (
        <LoginBox>
          <LoginBtn href="/login">로그인</LoginBtn>
          <RegisterBtn href="register">회원가입</RegisterBtn>
        </LoginBox>
      )}
    </Wrapper>
  );
}
