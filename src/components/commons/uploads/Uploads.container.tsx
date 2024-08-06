import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/type/generated/types";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "./Uploads.queries";
import UploadItemUI from "./Uploads.presenter";
import { CheckUploadImage } from "./Uploads.CheckUploads";
import { IUploadsProps } from "./Uploads.types";
import { Modal } from "antd";

export default function UploadItem(props: IUploadsProps) {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickOpenImage = () => {
    uploadRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    const file = event.target.files?.[0];
    const isValid = CheckUploadImage(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeImageUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadItemUI
      uploadRef={uploadRef}
      ImageUrl={props.ImageUrl}
      onChangeFile={onChangeFile}
      onClickOpenImage={onClickOpenImage}
    />
  );
}
