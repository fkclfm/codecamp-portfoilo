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
    <W.Wrapper>
      <W.Image
        src={`https://storage.googleapis.com/${data?.fetchUseditem.images[0]}`}
      />
      <W.ItemInfoBox>
        <W.ItemTitle>{data?.fetchUseditem.name}</W.ItemTitle>
        <W.ItemPrice>{data?.fetchUseditem.price}원</W.ItemPrice>
      </W.ItemInfoBox>
    </W.Wrapper>
  );
}
