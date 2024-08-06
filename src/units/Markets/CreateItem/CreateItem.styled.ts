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
  font-family: "NotoSansKR";
`;

export const Content = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 13px;
  margin-bottom: 20px;
  font-family: "NotoSansKR";
`;

export const ContentArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  font-family: "NotoSansKR";
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Address = styled.input`
  width: 8%;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding: 4px;
  text-align: center;
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
  color: black;
  font-weight: bold;
  background-color: white;
  border: 2px solid black;
  margin: 0 auto;
  font-family: "NotoSansKR";

  &:disabled {
    background-color: white;
    color: #d2d2d2;
    border: 1px solid #d2d2d2;
  }

  &:active {
    opacity: 0.7;
  }
`;
