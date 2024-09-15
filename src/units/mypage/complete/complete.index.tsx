import * as M from "./complete.styled";

export default function Complete() {
  return (
    <M.Wrapper>
      <M.Container>
        <M.MyPageTextBox>
          <M.MyPageTextH2>
            <M.MyPage href="/mypage">마이 페이지</M.MyPage>
          </M.MyPageTextH2>
          <M.MyPagePointBox>
            <M.PointHeader>내 정보</M.PointHeader>
            <M.PointLink href="mypage/point">포인트</M.PointLink>
            <M.PointLink href="mypage/pointInfo">테스트</M.PointLink>
          </M.MyPagePointBox>
        </M.MyPageTextBox>
        <M.MyPageInfoBox>
          <M.ProfileBox>
            <M.Complete>토스페이 결제가 완료되었습니다.</M.Complete>
          </M.ProfileBox>
        </M.MyPageInfoBox>
      </M.Container>
    </M.Wrapper>
  );
}
