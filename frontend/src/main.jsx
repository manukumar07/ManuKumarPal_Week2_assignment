import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { JournalProvider } from "./context/JournalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JournalProvider>
      <App />
    </JournalProvider>
  </StrictMode>
);
