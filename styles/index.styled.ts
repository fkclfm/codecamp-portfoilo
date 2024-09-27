import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const FirstLanding = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LandingHeader = styled.h1`
  font-size: 65px;
  color: white;

  @media screen and (min-width: 1300px) {
    font-size: 55px;
  }
`;

export const IntroduceBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;

export const TitleImage = styled.img`
  width: 300px;
  height: 300px;
`;
export const Title = styled.h1`
  font-size: 70px;
  color: black;
  @media screen and (min-width: 1300px) {
    font-size: 60px;
  }
`;

export const Service = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30em;

  @media screen and (min-width: 1300px) {
    gap: 20em;
  }
`;

export const ServiceTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const ServiceH1 = styled.h1`
  font-size: 70px;

  @media screen and (min-width: 1300px) {
    font-size: 50px;
  }
`;

export const ServiceImage = styled.img`
  width: 500px;
  height: 500px;

  @media screen and (min-width: 1300px) {
    width: 400px;
    height: 400px;
  }
`;

export const LandingEnd = styled(motion.div)`
  width: 100%;
  height: 200vh;
  background-image: url("/images/test.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimatedTextStyle = styled.h2`
  font-size: 4rem;
  color: #ffffff;
  text-align: center;
  margin-top: 50rem;
`;
