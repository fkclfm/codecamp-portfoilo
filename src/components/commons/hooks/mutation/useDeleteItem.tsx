import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/type/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "../query/useFetchItems";
import { useFetchItem } from "../query/useFetchItem";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteItem = () => {
  const router = useRouter();
  const { data } = useFetchItem();
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const handleDeleteItem = async (useditemId: string) => {
    try {
      await deleteUseditem({
        variables: { useditemId },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({ content: "상품 삭제 성공" });
      router.push("/market");
    } catch (error) {
      Modal.error({ content: "상품 삭제 권한이 없습니다." });
      if (error instanceof Error) console.log(error.message);
    }
  };
  const onClickDeleteItem = () => {
    if (data?.fetchUseditem._id) {
      handleDeleteItem(data.fetchUseditem._id);
    }
  };
  return {
    onClickDeleteItem,
  };
};
