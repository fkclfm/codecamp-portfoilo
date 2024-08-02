import * as N from "./navigation.styled";

const nav = [
  { page: "/firebase", name: "파이어베이스 게시판" },
  { page: "/boards", name: "자유 게시판" },
  { page: "/store", name: "음반마켓" },
  { page: "/mypage", name: "마이페이지" },
];
// 4
export default function NavigationUI(props: any) {
  return (
    <N.Wrapper>
      {nav.map((el, index) => (
        <>
          {index !== 0 && <N.NavHr />}
          <N.NavMenu id={el.page} onClick={props.onClickMenu} key={el.page}>
            {el.name}
          </N.NavMenu>
        </>
      ))}
    </N.Wrapper>
  );
}
