import * as S from "./CreateItem.styled";
import { ICreateItemForm } from "./CreateItem.types";
import { Error } from "../../register/Register.styled";
import { useRecoilState } from "recoil";
import { DevTool } from "@hookform/devtools";
import {
  imageUrlsState,
  isEditState,
} from "../../../commons/stores/GlobalState";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUpdateItem } from "../../../components/commons/hooks/mutation/useUpdateItem";
import { useFetchItem } from "../../../components/commons/hooks/query/useFetchItem";
import { MarketSchema } from "../../../commons/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useCreateitem } from "../../../components/commons/hooks/mutation/useCreateitem";
import { useKakaoMaps } from "../../../components/commons/hooks/customs/useKakaoMaps";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import UploadItem from "../../../components/commons/uploads/Uploads.container";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function CreateItemPage() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [ImageUrls, setImageUrls] = useRecoilState(imageUrlsState);
  const { handleCreateItem } = useCreateitem();
  const { handleUpdateItem } = useUpdateItem();
  const { useClickKakaoMap, lat, lng, roadAddress, landAddress } =
    useKakaoMaps();
  const { data } = useFetchItem();

  // useForm 훅 초기화
  const { register, handleSubmit, formState, control, reset, setValue } =
    useForm<ICreateItemForm>({
      defaultValues: {
        name: isEdit ? data?.fetchUseditem.name : "",
        remarks: isEdit ? data?.fetchUseditem.remarks : "",
        contents: isEdit ? data?.fetchUseditem.contents : "",
        price: isEdit ? Number(data?.fetchUseditem.price) : 0,
        tags: isEdit ? data?.fetchUseditem.tags ?? [] : [], // 빈 배열로 기본값 설정
        address: isEdit
          ? data?.fetchUseditem.useditemAddress?.address ?? ""
          : "",
        addressDetail: isEdit
          ? data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
          : "",
        lat: isEdit ? data?.fetchUseditem.useditemAddress?.lat ?? 0 : 0,
        lng: isEdit ? data?.fetchUseditem.useditemAddress?.lng ?? 0 : 0,
      },
      resolver: yupResolver(MarketSchema),
      mode: "onChange",
    });
  useClickKakaoMap();

  // Edit 상태 확인
  useEffect(() => {
    if (router.asPath === `/market/${router.query.productId}/edit`) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [router.asPath, setValue]);

  // 데이터 업데이트 시 useForm 리셋
  useEffect(() => {
    if (data) {
      reset({
        name: data.fetchUseditem.name || "",
        remarks: data.fetchUseditem.remarks || "",
        contents: data.fetchUseditem.contents || "",
        price: Number(data.fetchUseditem.price) || 0,
        images: data.fetchUseditem.images || [],
        tags: data.fetchUseditem.tags || [], // 빈 배열로 설정
        lat: lat || 0,
        lng: lng || 0,
        address: roadAddress || landAddress || "",
        addressDetail: data.fetchUseditem.useditemAddress?.addressDetail || "",
      });
    }
  }, [data, reset]);

  useEffect(() => {
    // 카카오맵에서 가져온 값이 변경될 때마다 setValue로 폼 상태 업데이트
    setValue("lat", lat);
    setValue("lng", lng);
    setValue("address", roadAddress || landAddress);
  }, [lat, lng, roadAddress, landAddress, setValue]);

  const handleChange = (value: string) => {
    setValue("contents", value !== "<p><br></p>" ? value : "");
  };

  const onChangeImageUrls = (ImageUrl: string, index: number) => {
    const newImageUrls = [...ImageUrls];
    newImageUrls[index] = ImageUrl;
    setImageUrls(newImageUrls);
  };

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
          <ReactQuill
            onChange={handleChange}
            defaultValue={data?.fetchUseditem.contents || ""}
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
          <Controller
            name="tags"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value } }) => (
              <S.Content
                type="text"
                placeholder="해시태그를 적어주세요!! #인기, #힙합, #클래식"
                onChange={(e) => {
                  const tags = e.target.value.split(",");
                  onChange(tags);
                }}
                value={value.join(", ")}
              />
            )}
          />
          <Error>{formState.errors.tags?.message}</Error>
          <S.ItemAddress>
            <S.KakaoMapBox>
              <label htmlFor="kakaoMap">거래 위치</label>
              <div id="map" style={{ width: "384px", height: "292px" }}></div>
            </S.KakaoMapBox>
            <S.GPSWrapper>
              <label htmlFor="gps">GPS</label>
              <S.GPSBox>
                <S.GPS
                  type="text"
                  placeholder="위도"
                  value={lat}
                  readOnly={true}
                  {...register("lat")}
                />
                <S.GPS
                  type="text"
                  placeholder="경도"
                  value={lng}
                  readOnly={true}
                  {...register("lng")}
                />
              </S.GPSBox>
              <label htmlFor="address">주소</label>
              <S.Address
                type="text"
                value={roadAddress || landAddress}
                {...register("address")}
              ></S.Address>
              <Error>{formState.errors.address?.message}</Error>
              <S.Content
                type="text"
                placeholder="상세 주소를 기입해주세요."
                {...register("addressDetail")}
              />
              <Error>{formState.errors.addressDetail?.message}</Error>
            </S.GPSWrapper>
          </S.ItemAddress>
          <label htmlFor="product-image">상품 사진</label>
          <S.ImageWrapper>
            {ImageUrls.map((el, index) => (
              <Controller
                key={index}
                name={`images.${index}`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <UploadItem
                    index={index}
                    ImageUrl={field.value}
                    onChangeImageUrls={onChangeImageUrls}
                    setValue={setValue}
                    {...register("images")}
                  />
                )}
              />
            ))}
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
