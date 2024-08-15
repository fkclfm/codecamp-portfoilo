import styled from "@emotion/styled";

export const Entire = styled.div`
  padding: 0 250px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #d2d2d2;
  margin: 60px auto;
  padding: 50px 80px;
  gap: 15px;
  text-align: center;
  border-radius: 20px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Writer = styled.span`
  font-size: 24px;
  font-weight: 500;
  text-align: right;
`;

export const Date = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const HorizonLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  height: 1px;
  margin-bottom: 20px;
`;

export const ItemPrice = styled.h1`
  font-size: 36px;
  text-align: left;
`;

export const ItemName = styled.span`
  font-size: 24px;
  color: #4f4f4f;
  font-weight: 700;
  text-align: left;
`;

export const ItemRemarks = styled.span`
  font-size: 18px;
  color: #bdbdbd;
  font-weight: 500;
  text-align: left;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
`;

export const BoardBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  width: 179px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  height: 45px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffd600;
`;

export const DisLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #828282;
`;

export const YoutubeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AreaBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const location = styled.img`
  width: 32px;
  height: 32px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 450px;
  height: 450px;
`;
