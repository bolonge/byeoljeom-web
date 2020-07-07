import React from "react";
import { ThemeProvider } from "../../typed-components";
import Theme from "../../Styles/Theme";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import AppPresenter from "./AppPresenter";

const QUERY = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;

function App() {
  const { data } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <AppPresenter isLoggedIn={data?.auth.isLoggedIn}></AppPresenter>
    </ThemeProvider>
  );
}

export default App;
