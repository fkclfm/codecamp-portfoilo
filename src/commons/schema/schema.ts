import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("@는 반드시 포함해주세요.")
    .required("이메일 형식으로 입력해주세요"),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4글자입니다.")
    .max(12, "비밀번호는 최대 12자리까지 설정할 수 있습니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,12}$/,
      "비밀번호는 최소 대소문자, 숫자, 특수문자가 하나씩 반드시 들어가야합니다."
    )
    .required(),
  name: yup
    .string()
    .min(2, "닉네임은 최소 2글자입니다.")
    .max(6, "닉네임은 최소 6글자까지 설정할 수 있습니다.")
    .required("닉네임은 최소 2글자부터 6글자로 설정해주세요!!"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("이메일 형식으로 입력해주세요.(예 : example@naver.com)")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4글자를 입력해야 합니다.")
    .max(12, "비밀번호는 최대 12자리까지 입력할 수 있습니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,12}$/,
      "비밀번호는 최소 대소문자, 숫자, 특수문자가 하나씩 반드시 들어가야합니다."
    )
    .required("비밀번호를 입력해주세요."),
});

export const MarketSchema = yup.object().shape({
  contents: yup.string().required("내용을 입력해주세요."), // contents 필드는 필수이며, 입력이 없을 경우 메시지 표시
  name: yup
    .string()
    .min(2, "상품명은 최소 2글자부터 입력해야 합니다.") // 최소 4글자 이상
    .max(30, "상품명은 최대 30글자까지 입력할 수 있습니다.")
    .required("상품명을 입력해주세요."), // 필수 입력 필드
  price: yup
    .number()
    .typeError("가격은 숫자여야 합니다.") // 숫자형이어야 한다는 에러 메시지
    .required("가격을 입력해주세요.") // 필수 입력 필드
    .positive("가격은 양수여야 합니다."), // 양수여야 함
  remarks: yup.string().required("설명을 입력해주세요."), // 필수 입력 필드
  // images: yup
  //   .array()
  //   .of(yup.string().url("유효한 URL을 입력해주세요.")) // 이미지 배열 각 항목이 유효한 URL인지 검사
  //   .required("이미지 URL을 입력해주세요."), // 필수 입력 필드
  tags: yup
    .string()
    .matches(/^[#]/, "#을 반드시 붙혀주세요.")
    .required("해시태그를 입력해주세요"), // 필수 입력 필드
  // address: yup.string().required("주소를 입력해주세요."), // 필수 입력 필드
  // addressDetail: yup.string().required("상세 주소를 입력해주세요."), // 필수 입력 필드
  // zipcode: yup.string().required("우편번호를 입력해주세요."), // 필수 입력 필드
  // lat: yup
  //   .number()
  //   .typeError("위도는 숫자여야 합니다.") // 숫자형이어야 한다는 에러 메시지
  //   .required("위도를 입력해주세요.") // 필수 입력 필드
  //   .min(-90, "위도는 -90 이상이어야 합니다.") // 최소 위도 값
  //   .max(90, "위도는 90 이하이어야 합니다."), // 최대 위도 값
  // lng: yup
  //   .number()
  //   .typeError("경도는 숫자여야 합니다.") // 숫자형이어야 한다는 에러 메시지
  //   .required("경도를 입력해주세요.") // 필수 입력 필드
  //   .min(-180, "경도는 -180 이상이어야 합니다.") // 최소 경도 값
  //   .max(180, "경도는 180 이하이어야 합니다."), // 최대 경도 값
});
