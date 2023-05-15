import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Footer from "./components/Footer";
import OtpFetch from "./components/otp-fetch";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Footer />
    <OtpFetch />
  </StrictMode>
);
