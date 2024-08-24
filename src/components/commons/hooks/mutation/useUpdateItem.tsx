import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/type/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { FETCH_USED_ITEMS } from "../query/useFetchItems";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

interface IUpdateItemForm {
  contents: string;
  name: string;
  price: number;
  remarks: string;
  images: string[];
  tags: string[];
  // address: string;
  // addressDetail: string;
  // zipcode: string;
  // lat: number;
  // lng: number;
}

export const useUpdateItem = () => {
  const router = useRouter();
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  const handleUpdateItem = async (data: IUpdateItemForm) => {
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            contents: data.contents,
            //images,
            name: data.name,
            price: data.price,
            remarks: data.remarks,
            tags: data.tags,
          },
          useditemId: String(router.query.productId),
        },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({ content: "상품 수정에 성공하였습니다." });
      router.push("/market");
      console.log(data);
    } catch (error) {
      Modal.error({ content: "상품 수정 권한이 없습니다." });
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    handleUpdateItem,
  };
};
