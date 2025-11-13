import { useContext, useState } from "react";
import { HashRouter, Route, useNavigate } from "react-router";
import Nav from "../Navigation/Nav";
import routes from "../../utils/routes";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import ErrorPage from "../../pages/Error";
import ContactContext from "../../context/Contacts/ContactsContext";
import "./App.scss";

function App() {
  const { contacts, setContacts } = useContext(ContactContext);

  const [isEdit, setIsEdit] = useState({
    isEdit: false,
    contact: null,
  });
  const navigate = useNavigate();

  const resetEdit = () => {
    setIsEdit({
      isEdit: false,
      contact: null,
    });
  };

  const handleSetContacts = (newContact) => {
    if (isEdit.isEdit) {
      const updatedContacts = contacts.map((contact) => {
        if (contact?.id === newContact?.id) {
          return newContact;
        }

        return contact;
      });

      setContacts(updatedContacts);
    } else {
      setContacts([...contacts, newContact]);
    }

    navigate(routes.home);
  };

  const handleDeleteContact = (id) => {
    const filterContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(filterContacts);
  };

  const handleEditContact = (contact) => {
    setIsEdit({
      isEdit: true,
      contact,
    });

    navigate(routes.form);
  };

  const handleStopEditContact = () => {
    resetEdit();
  };

  return (
    <div className="container">
      {<Nav />}
      <HashRouter>
        <Route
          path={routes.home}
          element={
            <Home
              contacts={contacts}
              onDelete={handleDeleteContact}
              onEdit={handleEditContact}
              // editContact={editContact}
            />
          }
        />
        <Route
          path={routes.form}
          element={
            <Form
              contacts={contacts}
              setContacts={handleSetContacts}
              isEdit={isEdit}
              onEditStop={handleStopEditContact}
            />
          }
        />
        <Route path={routes.error} element={<ErrorPage />} />
      </HashRouter>
    </div>
  );
}

export default App;
