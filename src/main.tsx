import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureLeadAttribution } from "@/lib/lead-attribution";
import { initializeGoogleTagManager } from "@/lib/google-tag-manager";

captureLeadAttribution();
initializeGoogleTagManager();

createRoot(document.getElementById("root")!).render(<App />);
