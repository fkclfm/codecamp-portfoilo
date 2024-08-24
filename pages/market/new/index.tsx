import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import CreateItemPage from "../../../src/units/Markets/CreateItem/CreateItem.Index";

export default function CreateItem() {
  useAuth();

  return <CreateItemPage />;
}
