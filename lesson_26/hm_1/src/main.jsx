import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./components/App/App";
import ContactsProvider from "./context/Contacts/ContactsProvider";
import LanguageProvider from "./context/Language/LanguageProvider";
import ThemeProvider from "./context/Theme/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <LanguageProvider>
      <ThemeProvider>
        <ContactsProvider>
          <App />
        </ContactsProvider>
      </ThemeProvider>
    </LanguageProvider>
  </HashRouter>
);
