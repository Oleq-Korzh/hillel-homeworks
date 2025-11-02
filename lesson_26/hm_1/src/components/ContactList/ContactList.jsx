import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./ContactList.css";

const ContactList = ({ contacts = [], onDelete, onEdit }) => {
  if (contacts.length === 0) {
    return <div className="contacts-empty">No contacts yet</div>;
  }

  return (
    <div className="contacts-list">
      {contacts.map((el) => (
        <div className="contact-card" key={el.id}>
          <div className="contact-info">
            <div className="contact-name">
              {el.name} {el.lastName}
            </div>
            <div className="contact-phone">{el.phone}</div>
          </div>

          <div className="contact-actions">
            <button className="icon-btn edit" onClick={() => onEdit(el)}>
              <FaEdit />
            </button>
            <button className="icon-btn delete" onClick={() => onDelete(el.id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
