import { useRouter } from "next/router";
import { MouseEvent } from "react";

export const useMoveToPage = () => {
  const router = useRouter();
  const onClickMoveToPage = (Path: string) => (event: MouseEvent) => {
    router.push(Path);
    const visitedPage = Path;
    console.log(visitedPage);
  };

  return {
    onClickMoveToPage,
  };
};
