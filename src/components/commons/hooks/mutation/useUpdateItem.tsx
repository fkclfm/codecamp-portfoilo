import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/type/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

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
  const handleUpdateItem = (data: IUpdateItemForm) => {
    try {
      const result = updateUseditem({
        variables: {
          updateUseditemInput: {
            contents: data.contents,
            //images,
            name: data.name,
            price: data.price,
            remarks: data.remarks,
            tags: data.tags,
          },
          useditemId: String(router.query),
        },
      });
      Modal.success({ content: "상품 수정에 성공하였습니다." });
      console.log(result);
    } catch (error) {
      Modal.error({ content: "상품 수정 권한이 없습니다." });
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    handleUpdateItem,
  };
};
