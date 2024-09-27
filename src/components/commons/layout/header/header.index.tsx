import { useScroll, useTransform } from "framer-motion";
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
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores/GlobalState";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useFetchUserLoggedIn } from "../../hooks/query/useFetchUserLoggedIn";

export default function Header() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const isHomePage = router.asPath === "/";
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.17, 0.25],
    ["rgba(0, 0, 0, 1)", "#ffffff"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0.17, 0.25],
    ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"]
  );

  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useFetchUserLoggedIn();

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    if (result) {
      setAccessToken(result);
    }
  }, [setAccessToken]);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    router.push("/");
  };

  const header = [
    { page: "/", name: "INTRODUCE" },
    { page: "/boards", name: "BOARD" },
    { page: "/market/", name: "STORE" },
    { page: "/mypage", name: "MYPAGE" },
  ];

  const backgroundColorStyle = isHomePage
    ? { backgroundColor }
    : { backgroundColor: "white" };
  const textColorStyle = isHomePage ? { color: textColor } : { color: "black" };

  if (!isHomePage) {
    backgroundColorStyle.backgroundColor = "white";
    textColorStyle.color = "black";
  }

  return (
    <Wrapper style={backgroundColorStyle} isFixed={isHomePage}>
      <Title style={textColorStyle} href="/main">
        HIPLP
      </Title>
      <Container>
        {header.map((el, index) => (
          <HeaderBar
            key={index}
            onClick={onClickMoveToPage(el.page)}
            style={textColorStyle}
          >
            {el.name}
          </HeaderBar>
        ))}
      </Container>
      {accessToken !== "" ? (
        <LoginBox>
          <UsernameBox>
            <Username style={textColorStyle}>
              {data?.fetchUserLoggedIn.name}
            </Username>
            <Username style={textColorStyle}>님</Username>
          </UsernameBox>
          <LogoutBtn onClick={onClickLogout} style={textColorStyle}>
            로그아웃
          </LogoutBtn>
        </LoginBox>
      ) : (
        <LoginBox>
          <LoginBtn href="/login" style={textColorStyle}>
            로그인
          </LoginBtn>
          <RegisterBtn href="/register" style={textColorStyle}>
            회원가입
          </RegisterBtn>
        </LoginBox>
      )}
    </Wrapper>
  );
}
