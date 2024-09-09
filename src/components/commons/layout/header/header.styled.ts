import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const Wrapper = styled(motion.div)<{ isFixed?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 100px;
  position: ${(props) => (props.isFixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: 0.15s;

  @media only screen and (max-width: 1024px) {
    padding: 0 50px;
  }
`;

export const Title = styled(motion.a)`
  font-weight: 700;
  font-size: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  gap: 200px;
`;

export const HeaderBar = styled(motion.h3)`
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  &:hover {
    opacity: 0.8;
  }
`;

export const LoginBtn = styled(motion.a)`
  width: 60px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

export const RegisterBtn = styled(motion.a)`
  width: 60px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

export const LogoutBtn = styled(motion.a)`
  font-weight: 600;
  font-size: 16px;
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

export const Username = styled(motion.span)`
  font-size: 16px;
  font-weight: 600;
`;
