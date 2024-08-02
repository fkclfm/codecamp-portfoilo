import styled from "@emotion/styled";

<<<<<<< HEAD
export const CommentWrapper = styled.div`
  width: 85%;
=======
export const Entire = styled.div`
  padding: 0 250px;
`;

export const CommentWrapper = styled.div`
  width: 1370px;
>>>>>>> laptop-work
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CommentTextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const CommentProfile = styled.div`
  width: 48px;
  height: 48px;
  background-image: url("/images/ic_profile.png");
`;

export const CommentContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const CommentWriter = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const CommentContent = styled.span`
  font-size: 16px;
  color: #4f4f4f;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const CommentDate = styled.span`
  font-size: 12px;
  color: #bdbdbd;
  font-weight: 400;
`;

export const CommentBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const CommentEditBtn = styled.button`
  width: 50px;
  height: 30px;
`;

export const CommentDeleteBtn = styled.button`
  background: black;
  color: white;
  width: 50px;
  height: 30px;
`;

export const HorizonLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
