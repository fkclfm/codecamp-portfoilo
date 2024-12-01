import styled from "@emotion/styled";

export const FirstLanding = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LandingHeader1 = styled.h1`
  font-family: "Pretendard-Light";
  font-size: 70px;
  color: white;
  margin-top: 25rem;
`;

export const LandingHeader2 = styled.h1`
  font-family: "Pretendard-Black";
  font-size: 88px;
  color: white;
  margin-bottom: 30px;
`;

export const LandingHeader3 = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const LandingButton = styled.button`
  font-family: "Pretendard-Bold";
  font-size: 25px;
  padding: 22px 50px;
  color: white;
  background-color: rgba(170, 170, 170, 0.3);
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const IntroBox = styled.div`
  width: 546px;
  height: 360px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroBoxHeader = styled.h1`
  font-family: "Pretendard-Bold";
  font-size: 32px;
  text-align: center;
  color: white;
  margin-bottom: 25px;
`;

export const IntroContent = styled.p`
  font-size: 17px;
  color: white;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 25px;
  text-align: center;
`;
