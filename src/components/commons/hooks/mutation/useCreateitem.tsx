import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/type/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "../query/useFetchItems";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      useditemAddress {
        address
        addressDetail
        zipcode
        lat
        lng
      }
    }
  }
`;
export interface ICreateItemForm {
  contents: string;
  name: string;
  price: number;
  remarks: string;
  images: string[];
  tags: string[];
  address: string;
  addressDetail: string;
  zipcode: string;
  lat: number;
  lng: number;
}

export const useCreateitem = () => {
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const handleCreateItem = async (data: ICreateItemForm) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            remarks: data.remarks,
            images: data.images,
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
              zipcode: data.zipcode,
              lat: data.lat,
              lng: data.lng,
            },
          },
        },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({ content: "상품 등록에 성공하였습니다." });
      router.push("/market");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    handleCreateItem,
  };
};
