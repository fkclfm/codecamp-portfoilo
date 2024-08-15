import * as W from "./ItemDetail.styled"; // 스타일을 W로 한번에 임포트
import { Tooltip } from "antd";
import { getDate } from "../../../commons/year";
import { useMoveToPage } from "../../../components/commons/hooks/customs/useMoveToPage";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "./ItemDetail.queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/type/generated/types";
import { useRouter } from "next/router";
import { useDeleteItem } from "../../../components/commons/hooks/mutation/useDeleteItem";

export default function ItemDetailUI() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });
  const { handleDeleteItem } = useDeleteItem();

  const { onClickMoveToPage } = useMoveToPage();

  const onClickDeleteItem = () => {
    if (data?.fetchUseditem._id) {
      handleDeleteItem(data.fetchUseditem._id);
    }
  };

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
        <W.RatingBox>
          <W.LikeBox>
            <img src="/images/ic_thumb_up.png" alt="like" />
            <span></span>
          </W.LikeBox>
          <W.DisLikeBox>
            <img src="/images/ic_thumb_down.png" alt="dislike" />
            <span></span>
          </W.DisLikeBox>
        </W.RatingBox>
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
