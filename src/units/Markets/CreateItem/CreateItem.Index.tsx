import * as S from "./CreateItem.styled";
import { ICreateItemForm } from "./CreateItem.types";
import { Error } from "../../register/Register.styled";
import { useRecoilState } from "recoil";
import { DevTool } from "@hookform/devtools";
import {
  isEditState,
  marketImageUrlsState,
} from "../../../commons/stores/GlobalState";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUpdateItem } from "../../../components/commons/hooks/mutation/useUpdateItem";
import { useFetchItem } from "../../../components/commons/hooks/query/useFetchItem";
import { MarketSchema } from "../../../commons/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateitem } from "../../../components/commons/hooks/mutation/useCreateitem";

export default function CreateItemPage() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [ImageUrls] = useRecoilState(marketImageUrlsState);
  const { handleCreateItem } = useCreateitem();
  const { handleUpdateItem } = useUpdateItem();
  const { data } = useFetchItem();

  const { register, handleSubmit, formState, control, reset, setValue } =
    useForm<ICreateItemForm>({
      defaultValues: {
        name: isEdit ? data?.fetchUseditem.name : "",
        remarks: isEdit ? data?.fetchUseditem.remarks : "",
        contents: isEdit ? data?.fetchUseditem.contents : "",
        price: isEdit ? Number(data?.fetchUseditem.price) : 0,
        tags:
          isEdit && data?.fetchUseditem.tags
            ? data?.fetchUseditem.tags.flatMap((el) =>
                el.split(",").map((el) => el.trim())
              )
            : [],
      },
      resolver: yupResolver(MarketSchema),
      mode: "onChange",
    });
  useEffect(() => {
    if (router.asPath === `/market/${router.query.productId}/edit`) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [router.asPath]);
  useEffect(() => {
    if (data) {
      reset({
        name: data.fetchUseditem.name || "",
        remarks: data.fetchUseditem.remarks || "",
        contents: data.fetchUseditem.contents || "",
        price: Number(data.fetchUseditem.price) || 0,
        tags: data.fetchUseditem.tags
          ? data.fetchUseditem.tags.flatMap((tag) =>
              tag.split(",").map((tag) => tag.trim())
            )
          : [],
      });
    }
  }, [data, reset]);
  return (
    <S.Wrapper>
      <S.TitleText>{isEdit ? "음반 수정" : "음반 등록"}하기</S.TitleText>
      <form
        onSubmit={
          isEdit
            ? handleSubmit(handleUpdateItem)
            : handleSubmit(handleCreateItem)
        }
      >
        <S.MarketCard>
          <S.HeaderTitle>
            <S.Title>
              <label>음반명</label>
              <S.ContentTitle
                type="text"
                placeholder="음반 이름을 적어주세요"
                {...register("name")}
              />
              <Error>{formState.errors.name?.message}</Error>
            </S.Title>
          </S.HeaderTitle>
          <label htmlFor="title">한줄요약</label>
          <S.Content
            type="text"
            placeholder="상품에 대한 특징을 한줄로 적어주세요."
            {...register("remarks")}
          />
          <Error>{formState.errors.remarks?.message}</Error>
          <label htmlFor="content">상품설명</label>
          <S.ContentArea
            cols={30}
            rows={10}
            placeholder="상품을 설명해 주세요."
            {...register("contents")}
          />
          <Error>{formState.errors.contents?.message}</Error>
          <label htmlFor="area">가격</label>
          <S.Content
            type="text"
            placeholder="상품 가격을 입력해주세요"
            {...register("price")}
          />
          <Error>{formState.errors.price?.message}</Error>
          <label htmlFor="hashtags">해시태그 입력</label>
          <S.Content
            type="text"
            placeholder="해시태그를 적어주세요!!  #인기, #힙합, #클래식"
            {...register("tags", {
              onChange: (e) => {
                const value = e.target.value;
                const tagArray = value.split(",");
                setValue("tags", tagArray);
              },
            })}
          />
          <Error>{formState.errors.tags?.message}</Error>
          <label htmlFor="area">거래 위치</label>
          <S.Content type="text" placeholder="상세 주소를 기입해주세요." />
          <S.ImageWrapper>
            <label htmlFor="product-image">상품 사진</label>
          </S.ImageWrapper>
          <label htmlFor="main-setting">메인 사진 설정</label>
          <S.ContentBox>
            <input type="radio" name="youtube" /> 사진 1
            <input type="radio" name="youtube" /> 사진 2
          </S.ContentBox>
          <S.RegisterBtn>
            {isEdit ? "상품 수정하기" : "상품 등록하기"}
          </S.RegisterBtn>
        </S.MarketCard>
      </form>
      <DevTool control={control} />
    </S.Wrapper>
  );
}
