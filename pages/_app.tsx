<<<<<<< HEAD
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
=======
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../src/fonts/index.css"

export default function App({ Component }) {
  const client = new ApolloClient ({
    uri : "https://backend-practice.codebootcamp.co.kr/graphql",
    cache : new InMemoryCache() 
  })
  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )
>>>>>>> laptop-work
}
