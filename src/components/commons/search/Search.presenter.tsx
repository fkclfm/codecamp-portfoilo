import {
  SearchIcon,
  SearchInput,
  SearchInputBox,
  SearchWrapper,
} from "./Search.styled";
import { ISearchUIProps } from "./Search.types";

export default function SearchItemUI(props: ISearchUIProps) {
  return (
    <SearchWrapper>
      <SearchInputBox>
        <SearchIcon src="/images/ic_search.png" />
        <SearchInput
          type="text"
          placeholder="제목을 검색해주세요"
          onChange={props.onChangeSearch}
        />
      </SearchInputBox>
    </SearchWrapper>
  );
}
