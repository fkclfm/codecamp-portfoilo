import { useMutation } from "@apollo/client";
import CreateItemPageUI from "./CreateItem.presenter";
import { CREATE_USED_ITEM } from "./CreateItem.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../commons/type/generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICreateItemForm } from "./CreateItem.types";
import { MarketSchema } from "../../../commons/schema/schema";
import { marketImageUrlsState } from "../../../commons/stores/GlobalState";
import { useRecoilState } from "recoil";
import { FETCH_USED_ITEMS } from "../ItemList/ItemList.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function CreateItemPage() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<ICreateItemForm>({
    resolver: yupResolver(MarketSchema),
    mode: "onChange",
  });
  const [ImageUrls, setImageUrls] = useRecoilState(marketImageUrlsState);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const onClickSubmit = async (data: ICreateItemForm) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            remarks: data.remarks,
            //images: [...ImageUrls],
            // useditemAddress: {
            //   address: data.address,
            //   addressDetail: data.addressDetail,
            //   zipcode: data.zipcode,
            //   lat: data.lat,
            //   lng: data.lng,
            // },
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

  const onChangeImageUrls = (ImageUrl: string, index: number) => {
    const newImageMarketUrls = [...ImageUrls];
    newImageMarketUrls[index] = ImageUrl;
    setImageUrls(newImageMarketUrls);
  };

  return (
    <CreateItemPageUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      ImageUrls={ImageUrls}
      formState={formState}
      onChangeImageUrls={onChangeImageUrls}
    />
  );
}
