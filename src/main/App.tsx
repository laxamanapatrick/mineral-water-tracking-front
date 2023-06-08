  import React from "react";
  import Routing from "../routes/routing";

  type AppProps = {
    toggleTheme: () => void
  }

  const App: React.FC<AppProps> = ({toggleTheme}) => {
    return <Routing toggleTheme={toggleTheme} />;
  }

  export default App;