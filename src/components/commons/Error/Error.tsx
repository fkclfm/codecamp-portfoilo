import { UseFormStateReturn } from "react-hook-form";
import { ICreateItemForm } from "../../../units/Markets/CreateItem/CreateItem.types";

interface IErrorProps {
  formState: UseFormStateReturn<ICreateItemForm>;
  errorName: ICreateItemForm;
}

export default function Error01(props: IErrorProps) {
  return (
    <div style={{ color: "red" }}>
      {props.formState.errors?.[props.errorName].message}
    </div>
  );
}
