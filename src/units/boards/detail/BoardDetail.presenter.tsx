import { IBoardDetailProps } from "./BoardDetail.types";
import * as W from "./BoardDetail.styled"; // 스타일을 W로 한번에 임포트
import ReactPlayer from "react-player";
import { Tooltip } from "antd";
import { getDate } from "../../../commons/year";
import Image from "next/image";

export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <W.Wrapper>
      <W.ImageBox>
        {props.data?.fetchBoard.images
          ?.filter((el: string) => el !== "")
          .map((el, index) => (
            <Image
              width={500}
              height={450}
              key={el}
              src={`https://storage.googleapis.com/${el}`}
            />
          ))}
      </W.ImageBox>
      <W.ProfileBox>
        <W.TitleText>{props.data?.fetchBoard.title}</W.TitleText>
        <W.UserBox>
          <W.Writer>{props.data?.fetchBoard.writer}</W.Writer>
          <W.Date>Date : {getDate(props.data?.fetchBoard.createdAt)}</W.Date>
        </W.UserBox>
      </W.ProfileBox>
      <W.AreaBox>
        <W.location src="/images/ic_link.png" />
        <Tooltip
          placement="topRight"
          title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} 
              ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}`}
        >
          <W.location src="/images/ic_location.png" />
        </Tooltip>
      </W.AreaBox>
      <W.TextBox>
        {/* 글 내용 */}
        <W.Text>{props.data?.fetchBoard.contents}</W.Text>
      </W.TextBox>
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
          <Image
            src="/images/ic_thumb_up.png"
            width={24}
            height={24}
            alt="like"
            onClick={props.onClickLike}
          />
          <span>{props.data?.fetchBoard.likeCount}</span>
        </W.LikeBox>
        <W.DisLikeBox>
          <Image
            src="/images/ic_thumb_down.png"
            width={24}
            height={24}
            alt="dislike"
            onClick={props.onClickDisLike}
          />
          <span>{props.data?.fetchBoard.dislikeCount}</span>
        </W.DisLikeBox>
      </W.RatingBox>
      <W.BtnBox>
        <W.BoardBtn onClick={props.onClickList}>
          <W.IconBtn>
            <Image
              src="/images/menu.svg"
              width={22}
              height={22}
              alt="menu"
              onClick={props.onClickDisLike}
            />
            목록으로
          </W.IconBtn>
        </W.BoardBtn>
        <W.BoardBtn onClick={props.onClickEdit}>
          <W.IconBtn>
            <Image
              src="/images/edit.svg"
              width={22}
              height={22}
              alt="edit"
              onClick={props.onClickDisLike}
            />
            수정하기
          </W.IconBtn>
        </W.BoardBtn>
        <W.BoardBtn
          id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        >
          <W.IconBtn>
            <Image
              src="/images/delete.svg"
              width={22}
              height={22}
              alt="delete"
              onClick={props.onClickDisLike}
            />
            삭제하기
          </W.IconBtn>
        </W.BoardBtn>
      </W.BtnBox>
    </W.Wrapper>
  );
}
