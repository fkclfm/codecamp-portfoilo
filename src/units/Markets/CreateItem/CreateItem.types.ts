import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormStateReturn,
} from "react-hook-form";

export interface ICreateItemForm {
  contents: string;
  name: string;
  price: number;
  remarks: string;
  images: string[];
  tags: string[];
  // address: string;
  // addressDetail: string;
  // zipcode: string;
  // lat: number;
  // lng: number;
}

export interface ICreateItemProps {
  register: UseFormRegister<ICreateItemForm>;
  handleSubmit: UseFormHandleSubmit<ICreateItemForm>;
  onClickSubmit: (data: ICreateItemForm) => void;
  onChangeImageUrls: (ImageUrl: string, index: number) => void;
  ImageUrls: string[];
  formState: UseFormStateReturn<ICreateItemForm>;
}
