import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 1100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 200px;
`;

export const RegisterCard = styled.div`
  display: flex;
  width: 900px;
  height: 800px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const RegisterHeader = styled.h1`
  font-size: 40px;
  margin-top: 4rem;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
`;

export const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 20px;
`;

export const RegisterSpan = styled.span`
  font-size: 19px;
`;
export const Input = styled.input`
  width: 30rem;
  font-size: 20px;
  padding: 5px;
  border: transparent;
  border-bottom: 1px solid #d3d3d3;
  transition: 0.3s;
  &:focus {
    border-color: black;
  }
`;

export const RegisterButton = styled.button`
  width: 500px;
  height: 50px;
  background: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 20px;
`;

export const Error = styled.div`
  color: red;
  font-size: 18px;
`;
