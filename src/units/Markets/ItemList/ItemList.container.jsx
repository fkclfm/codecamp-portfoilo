import { useQuery } from "@apollo/client";
import ItemListUI from "./ItemList.presenter";
import { FETCH_USED_ITEMS } from "./ItemList.queries";

export default function ItemListContainer() {
  const { data } = useQuery(FETCH_USED_ITEMS);

  return <ItemListUI />;
}
