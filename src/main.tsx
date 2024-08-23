import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col justify-center bg-slate-500 h-screen p-5">
      <App />
    </div>
  </StrictMode>
);
