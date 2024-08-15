import { v4 as uuidv4 } from "uuid";
import UploadItem from "../../../components/commons/uploads/Uploads.container";
import {
  Wrapper,
  HeaderTitle,
  Title,
  TitleText,
  Content,
  ContentTitle,
  ContentArea,
  ContentBox,
  RegisterBtn,
  MarketCard,
  ImageWrapper,
} from "./CreateItem.styled";
import { ICreateItemProps } from "./CreateItem.types";
import { Error } from "../../register/Register.styled";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores/GlobalState";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUpdateItem } from "../../../components/commons/hooks/mutation/useUpdateItem";

export default function CreateItemPageUI(props: ICreateItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const { handleUpdateItem } = useUpdateItem();

  useEffect(() => {
    if (router.asPath === "/edit") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [router.asPath]);

  return (
    <Wrapper>
      <TitleText>{isEdit ? "음반 수정" : "음반 등록"}하기</TitleText>
      <form
        onSubmit={
          isEdit
            ? props.handleSubmit(handleUpdateItem)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        <MarketCard>
          <HeaderTitle>
            <Title>
              <label>음반명</label>
              <ContentTitle
                type="text"
                placeholder="음반 이름을 적어주세요"
                {...props.register("name")}
              />
              <Error>{props.formState.errors.name?.message}</Error>
            </Title>
          </HeaderTitle>
          <label htmlFor="title">한줄요약</label>
          <Content
            type="text"
            placeholder="상품에 대한 특징을 한줄로 적어주세요."
            {...props.register("remarks")}
          />
          <Error>{props.formState.errors.remarks?.message}</Error>
          <label htmlFor="content">상품설명</label>
          <ContentArea
            cols={30}
            rows={10}
            placeholder="상품을 설명해 주세요."
            {...props.register("contents")}
          ></ContentArea>
          <Error>{props.formState.errors.contents?.message}</Error>
          <label htmlFor="area">가격</label>
          <Content
            type="text"
            placeholder="상품 가격을 입력해주세요"
            {...props.register("price")}
          />
          <Error>{props.formState.errors.price?.message}</Error>
          <label htmlFor="hashtags">해시태그 입력</label>
          <Content
            type="text"
            placeholder="해시태그를 적어주세요!!  #인기, #힙합, #클래식 "
            {...props.register("tags")}
          />
          <Error>{props.formState.errors.tags?.message}</Error>
          <label htmlFor="area">거래 위치 </label>
          <Content type="text" placeholder="상세 주소를 기입해주세요." />
          {/* <Error>{props.formState.errors.address?.message}</Error> */}
          <Content type="text" placeholder="상세 주소를 기입해주세요." />
          <label htmlFor="area">상품 사진</label>
          <ImageWrapper>
            {props.ImageUrls.map((el, index) => (
              <UploadItem
                key={uuidv4()}
                index={index}
                ImageUrl={el}
                onChangeImageUrls={props.onChangeImageUrls}
              />
            ))}
          </ImageWrapper>
          <label htmlFor="main-setting">매인 사진설정</label>
          <ContentBox>
            <input type="radio" name="youtube" /> 사진 1
            <input type="radio" name="youtube" /> 사진 2
          </ContentBox>
          <RegisterBtn>
            {isEdit ? "상품 수정하기" : "상품 등록하기"}
          </RegisterBtn>
        </MarketCard>
      </form>
    </Wrapper>
  );
}
