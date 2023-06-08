import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./main/App";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { store } from "./services/store-config";
import { Provider } from "react-redux";

const Index: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={currentTheme}>
          <BrowserRouter>
            <App toggleTheme={toggleTheme} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Index />);