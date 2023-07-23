import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Pages } from "./pages";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
