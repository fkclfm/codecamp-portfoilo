import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gray;
  margin: 60px auto;
  padding: 50px 80px;
  gap: 15px;
  text-align: center;
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 996px;
  justify-content: space-between;
`
export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const Writer = styled.text`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`
export const Date = styled.text`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`

export const HorizonLine = styled.div`
  border-bottom : 1px solid #BDBDBD;
  height: 1px;
  margin-bottom: 60px;
`

export const TitleText = styled.h1`
  font-size : 36px;
  text-align: left;
  padding-bottom: 400px;
`

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
`

export const BoardBtn = styled.button`
  border: 1px solid black;
  width: 179px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'NotoSansKR';
  background-color: yellow;
  height: 45px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`