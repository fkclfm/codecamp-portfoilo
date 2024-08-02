import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: #fe4e03;
  font-family: "Quizfont";
  gap: 35px;
`;

export const NavHr = styled.div`
  width: 1px;
  height: 20px;
  border: 1px solid white;
`;

export const NavMenu = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: white;
  text-decoration: none;
  border: transparent;
  background: transparent;
  opacity: 0.8;

  &:hover {
    font-weight: 700;
    opacity: 1;
  }
`;
