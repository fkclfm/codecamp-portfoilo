import { getDate } from "../../../commons/year";
import { IBoardDetailProps } from "./BoardDetail.types";
import * as W from "./BoardDetail.styled"; // 스타일을 W로 한번에 임포트
import ReactPlayer from "react-player";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <W.Entire>
      <W.Wrapper>
        <W.Header>
          <W.ProfileBox>
            <W.Writer>작성자 : {props.data?.fetchBoard.writer}</W.Writer>
            <W.Date>Date : {getDate(props.data?.fetchBoard.createdAt)}</W.Date>
          </W.ProfileBox>
          <W.AreaBox>
            <W.location src="/images/ic_location.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} 
              ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}`}
            >
              <W.location src="/images/ic_location.png" />
            </Tooltip>
          </W.AreaBox>
        </W.Header>
        <W.HorizonLine />
        {/* 글 제목 */}
        <W.TitleText>{props.data?.fetchBoard.title}</W.TitleText>
        {/* 글 내용 */}
        {props.data?.fetchBoard.contents}
        <W.YoutubeBox>
          <ReactPlayer
            url={String(props.data?.fetchBoard.youtubeUrl)}
            width={486}
            height={240}
            playing={true}
            muted={true}
          />
        </W.YoutubeBox>
        <W.RatingBox>
          <W.LikeBox>
            <img
              src="/images/ic_thumb_up.png"
              alt="like"
              onClick={props.onClickLike}
            />
            <span>{props.data?.fetchBoard.likeCount}</span>
          </W.LikeBox>
          <W.DisLikeBox>
            <img
              src="/images/ic_thumb_down.png"
              alt="dislike"
              onClick={props.onClickDisLike}
            />
            <span>{props.data?.fetchBoard.dislikeCount}</span>
          </W.DisLikeBox>
        </W.RatingBox>
      </W.Wrapper>
      <W.BtnBox>
        <W.BoardBtn onClick={props.onClickList}>목록으로</W.BoardBtn>
        <W.BoardBtn onClick={props.onClickEdit}>수정하기</W.BoardBtn>
        <W.BoardBtn
          id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </W.BoardBtn>
      </W.BtnBox>
      <W.HorizonLine />
    </W.Entire>
  );
}
