import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Debug logging
console.log("🚀 Main.tsx loading...");
console.log("📍 Current URL:", window.location.href);
console.log("🔧 Environment:", {
  MODE: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
});

// Add global error handlers
window.addEventListener("error", (e) => {
  console.error("❌ Global error:", e.error);
  console.error("Stack:", e.error?.stack);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("❌ Unhandled promise rejection:", e.reason);
});

// Wait for DOM to be ready
const initApp = () => {
  console.log("📦 Initializing React app...");

  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("❌ Root element not found!");
    document.body.innerHTML = `
      <div style="padding: 20px; font-family: system-ui; text-align: center;">
        <h1 style="color: red;">Error: Root element not found</h1>
        <p>The #root element is missing from the HTML.</p>
      </div>
    `;
    return;
  }

  console.log("✅ Root element found:", rootElement);

  try {
    const root = createRoot(rootElement);
    console.log("✅ React root created");

    root.render(
      <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
        </BrowserRouter>
      </StrictMode>
    );

    console.log("✅ React app rendered successfully!");
  } catch (error) {
    console.error("❌ Failed to render app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: system-ui; text-align: center;">
        <h1 style="color: red;">Error Loading Application</h1>
        <p>${error instanceof Error ? error.message : "Unknown error"}</p>
        <p>Check the browser console (F12) for more details.</p>
        <pre style="text-align: left; background: #f0f0f0; padding: 10px; overflow: auto;">
${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}
        </pre>
      </div>
    `;
  }
};

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
