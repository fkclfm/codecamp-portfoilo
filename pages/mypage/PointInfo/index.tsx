import { WithAuth } from "../../../src/components/commons/hocs/WithAuth";
import Point from "../../../src/units/mypage/point/point.index";

const point = () => {
  return <Point />;
};

export default WithAuth(point);
