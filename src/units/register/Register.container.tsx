import { ChangeEvent, useState } from "react";
import RegisterPageUI from "./Register.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Register.queries";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../commons/type/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  console.log(inputs);
  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.id;
    const Value = e.currentTarget.value;
    setInputs((prev) => ({
      ...prev,
      [target]: Value,
    }));
    console.log(e.currentTarget.value);
  };

  const onClickRegister = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: inputs.email,
            password: inputs.password,
            name: inputs.name,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "회원가입에 성공하셨습니다!!!" });
      router.push("/login");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "잘못 입력하였습니다. 다시 시도해주세요." });
    }
  };

  return (
    <RegisterPageUI
      onClickRegister={onClickRegister}
      onChangeInputs={onChangeInputs}
    />
  );
}
