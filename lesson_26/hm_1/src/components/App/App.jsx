import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import ContactAdd from "../ContactAdd/ContactAdd";
import Nav from "../Navigation/Nav";
import "./App.scss";

function App() {
  const [page, setPage] = useState("contact");
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const resetEdit = () => {
    setEditContact(null);
    setIsEdit(false);
  };

  const handleSetPage = (page) => {
    setPage(page);
  };

  const handleSetContacts = (contact) => {
    if (isEdit) {
      console.log("isEdit");

      const updatedContacts = contacts.map((el) => {
        if (el?.id === contact?.id) {
          return contact;
        }

        return el;
      });

      setContacts(updatedContacts);
    } else {
      setContacts([...contacts, contact]);
    }

    setPage("contact");
  };

  const handleDeleteContact = (id) => {
    const filterContacts = contacts.filter((el) => el.id !== id);

    setContacts(filterContacts);
  };

  const handleEditContact = (contact) => {
    setEditContact(contact);
    setIsEdit(true);
    setPage("add");
  };

  const handleStopEditContact = () => {
    resetEdit();
  };

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
    <div className="container">
      {<Nav nav={page} onNavigate={handleSetPage} />}
      {page === "contact" ? (
        <ContactList
          contacts={contacts}
          onDelete={handleDeleteContact}
          onEdit={handleEditContact}
          editContact={editContact}
        />
      ) : (
        <ContactAdd
          contacts={contacts}
          setContacts={handleSetContacts}
          setPage={handleSetPage}
          isEdit={isEdit}
          editContact={editContact}
          onEditStop={handleStopEditContact}
        />
      )}
    </div>
  );
}

export default App;
