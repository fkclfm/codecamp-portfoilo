import * as W from "./ItemDetail.styled"; // 스타일을 W로 한번에 임포트
import { Tooltip } from "antd";
import { getDate } from "../../../commons/year";
import { useMoveToPage } from "../../../components/commons/hooks/customs/useMoveToPage";
import { useDeleteItem } from "../../../components/commons/hooks/mutation/useDeleteItem";
import { useFetchItem } from "../../../components/commons/hooks/query/useFetchItem";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemDetail() {
  const router = useRouter();
  const { data } = useFetchItem();
  const { handleDeleteItem } = useDeleteItem();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickDeleteItem = () => {
    if (data?.fetchUseditem._id) {
      handleDeleteItem(data.fetchUseditem._id);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=df7890d83008dd8065a5509bd693fd7e&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴4

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lat,
          data?.fetchUseditem.useditemAddress?.lng
        );
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        //const iwContent = '<div style="padding:5px;"></div>';
      });
    };
  }, []);
  console.log(data);
  return (
    <W.Entire>
      <W.Wrapper>
        <W.Header>
          <W.ProfileBox>
            <W.Writer>
              {data?.fetchUseditem.seller?.name
                ? data?.fetchUseditem.seller.name
                : "판매자"}
            </W.Writer>
            <W.Date>Date : {getDate(data?.fetchUseditem.createdAt)}</W.Date>
          </W.ProfileBox>
          <W.AreaBox>
            <W.location src="/images/ic_link.png" />
            <Tooltip
              placement="topRight"
              title={`${data?.fetchUseditem.useditemAddress?.address ?? ""}
              ${data?.fetchUseditem.useditemAddress?.addressDetail ?? ""}`}
            >
              <W.location src="/images/ic_location.png" />
            </Tooltip>
          </W.AreaBox>
        </W.Header>
        <W.HorizonLine />
        {/* 글 제목 */}
        <W.ItemRemarks>{data?.fetchUseditem.remarks}</W.ItemRemarks>
        <W.ItemName>{data?.fetchUseditem.name}</W.ItemName>
        <W.ItemPrice>{data?.fetchUseditem.price}원</W.ItemPrice>
        {/* 글 내용 */}
        <W.ImageBox>
          <W.Image
            src={`https://storage.googleapis.com/${data?.fetchUseditem.images[0]}`}
          />
        </W.ImageBox>
        <W.ItemContents>{data?.fetchUseditem.contents}</W.ItemContents>
        <W.ItemHashTagBox>
          {data?.fetchUseditem.tags?.map((tags, index) => (
            <W.ItemHashTags key={index}>{tags}</W.ItemHashTags>
          ))}
        </W.ItemHashTagBox>
        <W.HorizonLine />
        {data?.fetchUseditem.useditemAddress ? (
          <W.addressBox id="map"></W.addressBox>
        ) : (
          <span>거래 주소가 기재되지 않았습니다.</span>
        )}
      </W.Wrapper>
      <W.BtnBox>
        <W.BoardBtn onClick={onClickMoveToPage("/market")}>목록으로</W.BoardBtn>
        <W.BoardBtn
          onClick={onClickMoveToPage(`/market/${router.query.productId}/edit`)}
        >
          수정하기
        </W.BoardBtn>
        <W.BoardBtn onClick={onClickDeleteItem}>삭제하기</W.BoardBtn>
        <W.BoardBtn>구매하기</W.BoardBtn>
      </W.BtnBox>
      <W.HorizonLine />
    </W.Entire>
  );
}
