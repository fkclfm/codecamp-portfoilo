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

export default function CreateItemPage() {
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
            contents: data.contents,
            name: data.name,
            price: data.price,
            remarks: data.remarks,
            images: [...ImageUrls],
            tags: data.tags,
            // useditemAddress: {
            //   address: data.address,
            //   addressDetail: data.addressDetail,
            //   zipcode: data.zipcode,
            //   lat: data.lat,
            //   lng: data.lng,
            // },
          },
        },
      });
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
