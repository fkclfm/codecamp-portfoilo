import { WithAuth } from "../../../src/components/commons/hocs/WithAuth";
import CreateItemPage from "../../../src/units/Markets/CreateItem/CreateItem.container";

const CreateItem = () => {
  return <CreateItemPage />;
};

export default WithAuth(CreateItem);
