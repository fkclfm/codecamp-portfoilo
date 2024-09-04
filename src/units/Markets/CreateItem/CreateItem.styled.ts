import styled from "@emotion/styled";

export const TitleText = styled.h1`
  font-size: 36px;
  text-align: center;
  padding-bottom: 45px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gray;
  margin: 60px auto;
  padding: 50px 80px;
`;

export const MarketCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 33px;
`;

export const Title = styled.div`
  width: 100%;
  height: 120px;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 13px;
`;

export const Content = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 13px;
  margin-bottom: 20px;
`;

export const ContentArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const ItemAddress = styled.div`
  display: flex;
  gap: 20px;
`;

export const GPSBox = styled.div`
  display: flex;
  gap: 50px;
`;

export const GPSWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GPS = styled.input`
  width: 100px;
  height: 20px;
  padding: 20px 0 20px 10px;
  border: 1px solid #bdbdbd;
`;

export const KakaoMapBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Address = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;
export const Btn = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const RegisterBtn = styled.button`
  width: 178px;
  height: 52px;
  color: white;
  background-color: black;
  margin: 0 auto;

  &:disabled {
    background-color: white;
    color: #d2d2d2;
    border: 1px solid #d2d2d2;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 18px;
`;
