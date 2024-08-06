import { atom } from "recoil";
import { v1 } from "uuid";

export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: "",
});

export const imageUrlsState = atom({
  key: "imageUrlsState", // 글 등록용 이미지 URL 상태
  default: ["", "", ""], // 기본값: 빈 문자열 3개
});

export const marketImageUrlsState = atom({
  key: "marketImageUrlsState", // 중고마켓 상품 등록용 이미지 URL 상태
  default: ["", ""], // 기본값: 빈 문자열 2개
});
