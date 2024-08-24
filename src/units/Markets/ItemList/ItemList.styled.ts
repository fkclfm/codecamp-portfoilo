import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  overflow: auto;
`;

export const ItemWrapper = styled.div`
  width: 1200px;
  height: 181px;
  display: flex;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const ItemMarketBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 24px;
`;

export const ItemImage = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ItemName = styled.h1`
  font-weight: 500;
  font-size: 24px;
`;

export const ItemRemark = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
`;

export const ItemHashTagBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ItemHashTag = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
`;

export const ItemTopBorder = styled.div`
  border-top: 1px solid #d2d2d2;
`;

export const ItemSellerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ItemSellerImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemSeller = styled.span`
  font-weight: 500px;
  color: #4f4f4f;
`;

export const CreateItemBtn = styled.button`
  width: 124px;
  height: 50px;
  background: white;
  margin-top: 30px;
  opacity: 0.8;
  position: fixed;
  right: 70px;
  bottom: 30px;

  &:hover {
    opacity: 1;
  }
`;
