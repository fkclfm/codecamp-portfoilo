/* eslint-disable react/display-name */
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.error({
        content: "토큰이 있어야 합니다. 다시 로그인을 시도해주세요.",
      });
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
