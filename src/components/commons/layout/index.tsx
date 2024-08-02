import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation/navigation.container";

interface ILayoutProps {
  children: any;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Navigation />
        <div>{props.children}</div>
      </div>
    </>
  );
}
