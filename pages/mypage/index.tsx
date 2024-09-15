import { WithAuth } from "../../src/components/commons/hocs/WithAuth";
import MyPage from "../../src/units/mypage/mypage.index";

const mypage = () => {
  return <MyPage />;
};

export default WithAuth(mypage);
