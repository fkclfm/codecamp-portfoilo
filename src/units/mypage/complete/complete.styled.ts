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
  align-items: center;
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 110px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 0.8rem;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Complete = styled.strong`
  font-size: 22px;
`;

export const email = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;
