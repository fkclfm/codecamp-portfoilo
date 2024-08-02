import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchInputBox = styled.div`
  width: 776px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  width: 100%;
  border: transparent;
  background-color: #f2f2f2;
  outline: none;
`;
