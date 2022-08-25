import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./themes/ThemeContext";
import Background from "./components/Background";

import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider initialTheme="light">
      <Background>
        {window.location.pathname !== "/" ? <App /> : null}
      </Background>
    </ThemeProvider>
  </BrowserRouter>
);
