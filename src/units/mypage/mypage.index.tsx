import { useFetchUserLoggedIn } from "../../components/commons/hooks/query/useFetchUserLoggedIn";
import * as M from "./mypage.styled";

export default function MyPage() {
  const { data } = useFetchUserLoggedIn();
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
            <M.ProfileImage
              src="/images/ic_profile-96px.png"
              alt="프로필 사진"
            />
            <M.UserBox>
              <M.Username>{data?.fetchUserLoggedIn.name}</M.Username>
              <M.email>{data?.fetchUserLoggedIn.email}</M.email>
            </M.UserBox>
          </M.ProfileBox>
        </M.MyPageInfoBox>
      </M.Container>
    </M.Wrapper>
  );
}
