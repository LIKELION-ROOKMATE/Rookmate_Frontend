import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { CookiesProvider } from 'react-cookie';

// ReactDOM.render(
//   <CookiesProvider>
//     <App />
//   </CookiesProvider>,
//   document.getElementById("root")
// );
//gg
createRoot(document.getElementById('root') as any).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);