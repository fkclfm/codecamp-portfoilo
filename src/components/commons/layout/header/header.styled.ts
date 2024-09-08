import styled from "@emotion/styled";

export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "black" : "white")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
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
  font-size: 17px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.a<{ isDarkMode: boolean }>`
  font-weight: 700;
  font-size: 30px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "black" : "white")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
`;

export const LoginBtn = styled.a<{ isDarkMode: boolean }>`
  width: 60px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "black" : "white")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

  &:hover {
    opacity: 0.8;
  }
`;

export const LoginBox = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "black" : "white")};
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

export const RegisterBtn = styled.a<{ isDarkMode: boolean }>`
  width: 60px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "black" : "white")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

  &:hover {
    opacity: 0.8;
  }
`;
