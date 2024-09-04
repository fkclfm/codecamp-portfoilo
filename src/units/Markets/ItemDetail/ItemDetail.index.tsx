import * as W from "./ItemDetail.styled"; // 스타일을 W로 한번에 임포트
import { Tooltip } from "antd";
import { getDate } from "../../../commons/year";
import { useMoveToPage } from "../../../components/commons/hooks/customs/useMoveToPage";
import { useDeleteItem } from "../../../components/commons/hooks/mutation/useDeleteItem";
import { useFetchItem } from "../../../components/commons/hooks/query/useFetchItem";
import { useRouter } from "next/router";
import { useKakaoMaps } from "../../../components/commons/hooks/customs/useKakaoMaps";

export default function ItemDetail() {
  const router = useRouter();
  const { data } = useFetchItem();
  const { onClickDeleteItem } = useDeleteItem();
  const { onClickMoveToPage } = useMoveToPage();
  const { useKakaoDetail } = useKakaoMaps();
  useKakaoDetail();
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
        <W.ItemContents
          dangerouslySetInnerHTML={{
            __html: String(data?.fetchUseditem.contents),
          }}
        ></W.ItemContents>
        <W.ItemHashTagBox>
          {data?.fetchUseditem.tags?.map((tags, index) => (
            <W.ItemHashTags key={index}>{tags}</W.ItemHashTags>
          ))}
        </W.ItemHashTagBox>
        <W.HorizonLine />
        {data?.fetchUseditem.useditemAddress?.lat ? (
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
