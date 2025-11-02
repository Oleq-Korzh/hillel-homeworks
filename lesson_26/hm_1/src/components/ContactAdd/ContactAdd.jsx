import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { regexes } from "../../utils/helpers";
import "./ContactAdd.scss";

const ContactAdd = ({
  contacts,
  setContacts,
  setPage,
  isEdit,
  editContact,
  onEditStop,
}) => {
  const [form, setForm] = useState({
    name: isEdit ? editContact?.name : "",
    lastName: isEdit ? editContact?.lastName : "",
    phone: isEdit ? editContact?.phone : "",
  });

  console.log(editContact);

  const [error, setError] = useState("");

  const resetForm = () => {
    setForm({ name: "", lastName: "", phone: "" });
    setError("");
  };

  const handleBack = () => {
    setPage("contact");
    onEditStop();
  };

  const handleSimpleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handlePhone = (value) => {
    setError("");
    setForm({ ...form, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.lastName.trim() ||
      !(form.phone && regexes.phone.test(form.phone))
    ) {
      setError("There is an error in the fields, please check");
      return;
    }

    if (isEdit) {
      const findedContact = contacts.find((el) => el.id === editContact.id);
      const hasDublicate = contacts.some(
        (el) => el.id !== editContact.id && el.phone === form.phone
      );

      if (hasDublicate) {
        setError("Such contact already exists");
        return;
      }

      setContacts({ ...form, id: findedContact.id });
    } else {
      const id = Date.now();
      const hasDublicate = contacts.some((el) => el.phone === form.phone);

      if (hasDublicate && !isEdit) {
        setError("Such contact already exists");
        return;
      }

      setContacts({ ...form, id });
    }

    setError("");
    onEditStop();
    resetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        name="name"
        placeholder="First Name"
        onChange={handleSimpleInput}
      />
      <input
        type="text"
        value={form.lastName}
        name="lastName"
        placeholder="Last Name"
        onChange={handleSimpleInput}
      />
      <PhoneInput
        defaultCountry="UA"
        countrySelectComponent={() => null}
        placeholder="+380 00 000 00 00"
        value={form.phone}
        onChange={handlePhone}
      />
      {error && <div className="form__error">{error}</div>}
      <div className="form__buttons">
        <button type="submit" className="btn-save">
          Submit
        </button>
        <button type="button" className="btn-cancel" onClick={handleBack}>
          Back
        </button>
      </div>
    </form>
  );
};

export default ContactAdd;
