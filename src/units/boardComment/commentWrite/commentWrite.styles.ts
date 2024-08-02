import styled from "@emotion/styled";

export const Entire = styled.div`
  padding: 0 250px;
`;

export const CommentWrapper = styled.div`
  width: 1370px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CommentWriter = styled.input`
  background: transparent;
  text-align: left;
  border: 1px solid black;
  padding: 10px;
`;

export const CommentPassword = styled.input`
  background: transparent;
  text-align: left;
  border: 1px solid black;
  padding: 10px;
`;

export const Comment = styled.text`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`;

export const CommentInput = styled.input`
  width: 1370px;
  padding: 15px 0 90px 15px;
  text-align: start;
`;
export const CommentBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CommentBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
`;
