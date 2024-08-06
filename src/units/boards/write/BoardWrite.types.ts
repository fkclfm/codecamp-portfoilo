import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/type/generated/types";
import { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IupdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IBoardWriteEditProps {
  handleModal: (event: MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (data: Address) => void;
  onClickNew: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  PwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  WriterCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  TitleCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  ContentCheck: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onYoutubeUrlCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImageUrls: (ImageUrl: string, index: number) => void;
  writerError: string;
  pwError: string;
  titleError: string;
  contentsError: string;
  address: string;
  zipcode: string;
  isTrue: boolean;
  isOpen: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
  ImageUrls: string[];
}
