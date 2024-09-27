import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// InfiniteScroll을 감싸는 Wrapper
export const ItemListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  margin-top: 150px;
`;

//ItemList.index
export const CreateItemBtn = styled.button`
  width: 130px;
  height: 55px;
  padding: 10px;
  background: white;
  margin-top: 30px;
  position: fixed;
  right: 90px;
  bottom: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
`;

export const ItemWrapper = styled.div`
  width: 270px;
  height: 405px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 7px;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 7px;
`;

export const ItemTitle = styled.h2`
  font-size: 18px;
  color: #5a5a5a;
  font-weight: 400;
`;

export const ItemPrice = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const ItemHashTagBox = styled.h2`
  display: flex;
  gap: 6px;
`;

export const ItemHashTag = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #999999;
`;
