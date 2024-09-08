import { useRouter } from "next/router";
import Banner from "./banner/banner.index";
import Header from "./header/header.index";

interface ILayoutProps {
  children: any;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      {router.asPath === "/main" ? (
        <div>
          <Header />
          <Banner />
          <div>{props.children}</div>
        </div>
      ) : (
        <div>
          <Header />
          <div>{props.children}</div>
        </div>
      )}
    </>
  );
}
