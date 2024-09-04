import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 1100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 250px;
`;

export const LoginCard = styled.div`
  display: flex;
  width: 900px;
  height: 800px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const LoginHeader = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-top: 4rem;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 100px;
`;
export const LoginSpan = styled.span`
  font-size: 19px;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 25px;
`;

export const Input = styled.input`
  width: 30rem;
  font-size: 20px;
  border: transparent;
  border-bottom: 1px solid #d3d3d3;
  transition: 0.3s;
  padding: 5px;

  &:focus {
    border-color: black;
  }
`;
export const LoginButton = styled.button`
  width: 500px;
  height: 50px;
  background: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
`;

export const RegisterButton = styled.button`
  width: 500px;
  height: 50px;
  background: white;
  color: black;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  font-size: 15px;
`;

export const Error = styled.div`
  color: red;
  font-size: 18px;
`;
