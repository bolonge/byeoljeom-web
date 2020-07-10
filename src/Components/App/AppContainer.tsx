import React from "react";
import { ThemeProvider } from "../../typed-components";
import Theme from "../../Styles/Theme";
import AppPresenter from "./AppPresenter";
import GlobalStyles from "../../Styles/GlobalStyles";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";

function App() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <AppPresenter isLoggedIn={isLoggedIn}></AppPresenter>
      </>
    </ThemeProvider>
  );
}

export default App;
