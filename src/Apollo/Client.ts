import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
require("dotenv").config();
const cache = new InMemoryCache();

export default new ApolloClient({
  cache,
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://reveiwgraphqlserver.herokuapp.com",
  clientState: {
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
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});
