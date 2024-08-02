import { gql } from "@apollo/client";

// 이미지 업로드 api 사용을 위한 쿼리 작성
export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
