import { useState, useEffect } from "react";
import ContactContext from "./ContactsContext";

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");

    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactsProvider;
