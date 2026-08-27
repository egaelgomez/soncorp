import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureLeadAttribution } from "@/lib/lead-attribution";

captureLeadAttribution();

createRoot(document.getElementById("root")!).render(<App />);
