import { useQuery } from "@apollo/client";
import ItemDetail from "../../../src/units/Markets/ItemDetail/ItemDetail.container";
import { FETCH_USED_ITEM } from "../../../src/units/Markets/ItemDetail/ItemDetail.queries";

export default function MarketItem() {
  const { data } = useQuery(FETCH_USED_ITEM);

  return <ItemDetail />;
}
