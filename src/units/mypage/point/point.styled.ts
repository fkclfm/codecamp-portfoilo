import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Container = styled.div`
  width: 80rem;
  height: 120rem;
  display: flex;
  gap: 1.5em;
`;

export const MyPageTextBox = styled.div`
  width: 12em;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MyPageTextH2 = styled.h2`
  width: 180px;
  height: 59px;
  font-size: 24px;
  line-height: 29px;
`;

export const MyPage = styled.a`
  font-size: 24px;
  line-height: 29px;
`;

export const MyPagePointBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const PointHeader = styled.strong`
  font-size: 18px;
`;

export const PointCheckLink = styled.a`
  font-size: 15px;
  font-weight: bold;
`;

export const PointLink = styled.a`
  font-size: 15px;
  color: rgba(34, 34, 34, 0.5);
`;

export const MyPageInfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`;

export const PointH3 = styled.h3`
  font-size: 24px;
`;

export const PointProfileBox = styled.div`
  width: 100%;
  height: 110px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 0.8rem;
  background-color: #fafafa;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const PointBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const PointAmount = styled.strong`
  font-size: 19px;
`;

export const PointP = styled.p`
  font-size: 16px;
  color: rgba(34, 34, 34, 0.5);
`;

export const PointButton = styled.button`
  width: 134px;
  height: 42px;
  background-color: black;
  color: white;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  padding: 0 18px 0 18px;

  &:active {
    opacity: 0.8;
  }
`;

export const AmountBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 6.5rem;
`;

export const AmountHeader = styled.h2`
  font-size: 26px;
`;
