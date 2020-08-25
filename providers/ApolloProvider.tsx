import React, { useContext } from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, NormalizedCacheObject } from "@apollo/client";
import { Auth0Context } from "./Auth0Provider";

const createApolloClient = (
  token: string
): ApolloClient<NormalizedCacheObject> => {
  const link = new HttpLink({
    uri: "https://sweeping-jay-28.hasura.app/v1/graphql",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};


export const AuthorizedApolloProvider: React.FC = ({ children }) => {
  const { token } = useContext(Auth0Context)
  const client = createApolloClient(token);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
