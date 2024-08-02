import { WithAuth } from "../../src/components/commons/hocs/WithAuth";
import MyPage from "../../src/units/mypage/mypage.container";

const mypage = () => {
  return <MyPage />;
};

export default WithAuth(mypage);
