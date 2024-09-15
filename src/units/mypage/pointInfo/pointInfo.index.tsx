import * as M from "./mypage.styled";

export default function MyPage() {
  return (
    <M.Wrapper>
      <M.Container>
        <M.MyPageTextBox>
          <M.MyPageTextH2>마이 페이지</M.MyPageTextH2>
          <M.MyPagePointBox>
            <M.PointHeader>포인트</M.PointHeader>
            <M.PointSpan href="mypage/point">충전</M.PointSpan>
            <M.PointSpan href="mypage/pointInfo">충전 내역</M.PointSpan>
            <M.PointSpan></M.PointSpan>
          </M.MyPagePointBox>
        </M.MyPageTextBox>
        <M.MyPageInfoBox>
          <M.ProfileBox>
            <M.ProfileImage
              src="/images/ic_profile-96px.png"
              alt="프로필 사진"
            />
            <M.UserBox>
              <M.Username>안녕</M.Username>
              <M.email>clsrn@naver.com</M.email>
            </M.UserBox>
          </M.ProfileBox>
        </M.MyPageInfoBox>
      </M.Container>
    </M.Wrapper>
  );
}
