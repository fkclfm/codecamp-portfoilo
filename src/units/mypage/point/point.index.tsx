import * as M from "./point.styled";
import { useFetchUserLoggedIn } from "../../../components/commons/hooks/query/useFetchUserLoggedIn";
import { useState } from "react";
import { useCreatePointTransactionOfLoading } from "../../../components/commons/hooks/mutation/useCreatePointTransactionOfLoading";

export default function MyPage() {
  const { data } = useFetchUserLoggedIn();
  const { CreatePointTransactionOfLoading } =
    useCreatePointTransactionOfLoading();
  const amount = [1000, 5000, 10000, 30000, 50000, 100000];
  const [selectAmount, setSelectAmount] = useState(0);
  const onClickPayment = async () => {
    if (process.browser) {
      const IMP = window.IMP;
      IMP.init("imp49910675");
      IMP.request_pay(
        {
          pg: "kakaopay",
          pay_method: "card",
          merchant_uid: `payment-${crypto.randomUUID()}`, // 주문 고유 번호
          name: "포인트 충전",
          amount: selectAmount,
          buyer_email: "",
          buyer_name: "홍길동",
          buyer_tel: "010-4242-4242",
          buyer_addr: "서울특별시 강남구 신사동",
          buyer_postcode: "01181",
          notice_url: "http://localhost:3000/mypage/point/complete",
          m_redirect_url: "http://localhost:3000/mypage/", // 모바일에서는 결제시, 페이지 주소가 바뀜. 따라서 결제 끝나고 돌아갈 주소 입력해야함.
        },
        async (response: any) => {
          // 결제 종료 시 호출되는 콜백 함수
          // response.imp_uid 값으로 결제 단건조회 API를 호출하여 결제 결과를 확인하고,
          // 결제 결과를 처리하는 로직을 작성합니다.
          if (response.success) {
            console.log(response);
          }
          if (response.error_code != null) {
            return alert(
              `결제에 실패하였습니다. 에러 내용: ${response.error_msg}`
            );
          }
          // 고객사 서버에서 /payment/complete 엔드포인트를 구현해야 합니다.
          // (다음 목차에서 설명합니다)
          const notified = await fetch(
            `http://localhost:3000/mypage/point/complete`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              // imp_uid와 merchant_uid, 주문 정보를 서버에 전달합니다
              body: JSON.stringify({
                imp_uid: response.imp_uid,
                merchant_uid: response.merchant_uid,
                // 주문 정보...
              }),
            }
          );
          if (notified.ok) {
            const impUid = response.imp_uid;
            await CreatePointTransactionOfLoading(impUid);
            console.log(response.imp_uid);
            alert("결제를 성공하셨습니다.");
          }
        }
      );
    }
  };
  return (
    <M.Wrapper>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <M.Container>
        <M.MyPageTextBox>
          <M.MyPageTextH2>
            <M.MyPage href="/mypage">마이 페이지</M.MyPage>
          </M.MyPageTextH2>
          <M.MyPagePointBox>
            <M.PointHeader>내 정보</M.PointHeader>
            <M.PointCheckLink href="/mypage/point">포인트</M.PointCheckLink>
            <M.PointLink href="/mypage/pointInfo">테스트</M.PointLink>
          </M.MyPagePointBox>
        </M.MyPageTextBox>
        <M.MyPageInfoBox>
          <M.PointH3>포인트</M.PointH3>
          <M.PointProfileBox>
            <M.PointBox>
              <M.PointP>
                {data?.fetchUserLoggedIn.name} 님의 사용 가능한 포인트:
              </M.PointP>
              <M.PointAmount>
                {data?.fetchUserLoggedIn.userPoint?.amount ?? 0} 원
              </M.PointAmount>
            </M.PointBox>
          </M.PointProfileBox>
          <M.PointH3>충전금액</M.PointH3>
          <M.PointProfileBox>
            <M.PointBox>
              {amount.map((amount, index) => (
                <M.PointButton
                  key={index}
                  onClick={() => {
                    setSelectAmount(amount);
                  }}
                >
                  + {amount}원
                </M.PointButton>
              ))}
            </M.PointBox>
          </M.PointProfileBox>
          <M.AmountBox>
            <M.AmountHeader>총 {selectAmount} 원</M.AmountHeader>
            <M.PointButton onClick={onClickPayment}>충전하기</M.PointButton>
          </M.AmountBox>
        </M.MyPageInfoBox>
      </M.Container>
    </M.Wrapper>
  );
}
