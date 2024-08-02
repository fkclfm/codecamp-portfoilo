import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores/GlobalState";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloProps {
  children: any;
}
export default function ApolloSetting(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    if (result) {
      setAccessToken(result);
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
