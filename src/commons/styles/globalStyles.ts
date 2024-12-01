import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
    font-size: 16px;
  }

  body {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/PretendardVariable.woff2");
  }

  @font-face {
    font-family: "Pretendard-Black";
    src: url("/fonts/Pretendard-Black.woff2");
  }

  @font-face {
    font-family: "Pretendard-Bold";
    src: url("/fonts/Pretendard-Bold.woff2");
  }

  @font-face {
    font-family: "Pretendard-Light";
    src: url("/fonts/Pretendard-Light.woff2");
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
    color: black;
  }

  button {
    text-align: center;
    border: 0;
    background-color: transparent;
  }
`;
