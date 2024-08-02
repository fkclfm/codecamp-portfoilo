import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

export interface IUploadsProps {
  ImageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string[]>>;
}

export interface IUploadsUIProps {
  ImageUrl: string;
  uploadRef: RefObject<HTMLInputElement>;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenImage: () => void;
}
