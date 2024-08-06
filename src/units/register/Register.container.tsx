import RegisterPageUI from "./Register.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Register.queries";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../commons/type/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { IUseFormData } from "./Register.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../commons/schema/schema";

export default function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IUseFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickRegister = async (data: IUseFormData) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
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
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
