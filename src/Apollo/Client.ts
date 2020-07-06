import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { withClientState } from "apollo-link-state";
import { onError } from "apollo-link-error";

const isDev = process.env.NODE_ENV === "development";

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: isDev
    ? "http://localhost:4000/graphql"
    : "https://nuberserver.now.sh/graphql",
});

const localStateLink = withClientState({
  cache,
  defaults: {
    auth: {
      __typename: "Auth",
      isLoggedIn: Boolean(localStorage.getItem("jwt")) || false,
    },
  },
  resolvers: {
    Mutation: {
      logUserIn: (_, { token }, { cache }) => {
        localStorage.setItem("jwt", token);
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: true,
            },
          },
        });
        return null;
      },
      logUserOut: (_, __, { cache }) => {
        localStorage.removeItem("jwt");
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: false,
            },
          },
        });

        return null;
      },
    },
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("jwt");
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
});

export default new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, localStateLink, authLink.concat(httpLink)]),
});
