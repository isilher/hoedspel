import React, { useContext } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, NormalizedCacheObject } from "@apollo/client";
import { Auth0Context } from "./Auth0Provider";

const createApolloClient = (
  token: string,
  userId: string
): ApolloClient<NormalizedCacheObject> => {
  const link = new HttpLink({
    uri: "https://sweeping-jay-28.hasura.app/v1/graphql",
    // headers: {
    //   // Authorization: `Bearer ${token}`,
    //   // 'X-Hasura-Role': 'user',
    //   // 'X-Hasura-User-Id': userId
    // },
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};


export const AuthorizedApolloProvider: React.FC = ({ children }) => {
  const { token, auth0Id } = useContext(Auth0Context)
  const client = createApolloClient(token, auth0Id);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
