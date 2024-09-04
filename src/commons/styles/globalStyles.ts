import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Medium.woff");
  }

  input {
    outline: none;
  }

  textarea {
    outline: none;
  }
  a {
    border: transparent;
    cursor: pointer;
    text-decoration: none;
  }
`;
