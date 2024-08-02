import styled from "@emotion/styled";

//레이아웃 컴포넌트로 인한 박스 제작
export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InputBox = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
