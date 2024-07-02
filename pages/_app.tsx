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
}
