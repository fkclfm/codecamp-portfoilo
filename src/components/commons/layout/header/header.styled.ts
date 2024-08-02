import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

export const HeaderImg = styled.img`
  cursor: pointer;
  width: 500px;
  height: 80px;
  object-fit: contain;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

export const LoginBtn = styled.a`
  width: 60px;
  height: 24px;
  background-color: white;
  font-weight: 700;
  font-size: 16px;
  border: transparent;
  cursor: pointer;
  text-decoration: none;
  color: black;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NickName = styled.span`
  font-size: 16px;
  color: #fe4e03;
  font-weight: bold;
`;

export const LogoutBtn = styled.a`
  background: #fe4e03;
  padding: 10px 16px 10px 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: transparent;
  cursor: pointer;
  text-decoration: none;
  color: white;
  opacity: 0.8;
`;

export const RegisterBtn = styled.a`
  background: #fe4e03;
  padding: 10px 16px 10px 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: transparent;
  cursor: pointer;
  text-decoration: none;
  color: white;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
