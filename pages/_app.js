import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../src/fonts/index.css"

export default function App({ Component, pageProps }) {
  const client = new ApolloClient ({
    uri : "http://backend-pratice.codebootcamp.co.kr/graphql",
    cache : new InMemoryCache() 
  })
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
