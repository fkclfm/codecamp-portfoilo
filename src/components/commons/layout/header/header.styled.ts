import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  gap: 200px;
`;

export const HeaderBar = styled.h3`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.a`
  font-weight: 700;
  font-size: 30px;
  color: black;
`;

export const LoginBtn = styled.a`
  width: 60px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  color: black;

  &:hover {
    opacity: 0.8;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const UsernameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Username = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const LogoutBtn = styled.a`
  font-weight: 600;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

export const RegisterBtn = styled.a`
  width: 60px;
  height: 24px;
  background-color: white;
  font-weight: 700;
  font-size: 16px;
  color: black;

  &:hover {
    opacity: 0.8;
  }
`;
