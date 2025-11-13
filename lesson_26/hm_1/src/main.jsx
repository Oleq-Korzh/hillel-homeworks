import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./components/App/App";
import ContactsProvider from "./context/Contacts/ContactsProvider";
import LanguageProvider from "./context/Language/LanguageProvider";
import ThemeProvider from "./context/Theme/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <ThemeProvider>
        <ContactsProvider>
          <App />
        </ContactsProvider>
      </ThemeProvider>
    </LanguageProvider>
  </BrowserRouter>
);
