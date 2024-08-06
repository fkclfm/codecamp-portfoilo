import { ChangeEvent, RefObject } from "react";

export interface IUploadsProps {
  ImageUrl: string;
  index: number;
  onChangeImageUrls: (ImageUrl: string, index: number) => void;
}

export interface IUploadsUIProps {
  ImageUrl: string;
  uploadRef: RefObject<HTMLInputElement>;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenImage: () => void;
}
