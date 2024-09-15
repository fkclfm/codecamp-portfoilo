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
    color: black;
  }

  button {
    text-align: center;
    border: 0;
    background-color: transparent;
  }
`;
