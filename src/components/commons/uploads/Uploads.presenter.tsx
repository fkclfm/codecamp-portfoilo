import { UploadButton, UploadImage, UploadInputHidden } from "./Uploads.styles";
import { IUploadsUIProps } from "./Uploads.types";

export default function UploadItemUI(props: IUploadsUIProps) {
  return (
    <>
      {props.ImageUrl ? (
        <UploadImage src={`https://storage.googleapis.com/${props.ImageUrl}`} />
      ) : (
        <UploadButton onClick={props.onClickOpenImage}>
          <>+</>
          <>업로드</>
        </UploadButton>
      )}
      <UploadInputHidden
        type="file"
        ref={props.uploadRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
