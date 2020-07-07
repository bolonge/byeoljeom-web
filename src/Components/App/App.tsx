import React from "react";
import { ThemeProvider } from "../../typed-components";
import Theme from "../../Styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
