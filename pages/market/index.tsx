import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import ItemLists from "../../src/units/Markets/ItemList/ItemList.index";

export default function ItemList() {
  useAuth();
  return <ItemLists />;
}
