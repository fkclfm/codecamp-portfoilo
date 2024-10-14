import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 64px;
  margin-top: 60px;
  gap: 80px;
`;

export const Image = styled.img`
  width: 604px;
  height: 604px;
  border-radius: 20px;
`;

export const ItemInfoBox = styled.div`
  width: 604px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const ItemTitle = styled.h2`
  font-size: 24px;
  color: #141313;
  font-weight: 600;
  margin-top: 25px;
`;

export const ItemPrice = styled.h2`
  font-size: 36px;
  color: #212121;
  font-weight: 600;
`;
