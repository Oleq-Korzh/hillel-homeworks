import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { regexes } from "../../utils/helpers";
import routes from "../../utils/routes";
import LanguageContext from "../../context/Language/LanguageContent";
import "./ContactAdd.scss";

const ContactAdd = ({ contacts, setContacts, isEdit, onEditStop }) => {
  const [form, setForm] = useState({
    name: isEdit.isEdit ? isEdit.contact?.name : "",
    lastName: isEdit.isEdit ? isEdit.contact?.lastName : "",
    phone: isEdit.isEdit ? isEdit.contact?.phone : "",
  });
  const [error, setError] = useState("");
  const { language } = useContext(LanguageContext);
  const navigation = useNavigate();

  const resetForm = () => {
    setForm({ name: "", lastName: "", phone: "" });
    setError("");
  };

  const handleBack = () => {
    navigation(routes.home);
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
      setError(language?.form?.errorField);
      return;
    }

    if (isEdit.isEdit) {
      const findedContact = contacts.find((el) => el.id === isEdit.contact.id);
      const hasDublicate = contacts.some(
        (el) => el.id !== isEdit.contact.id && el.phone === form.phone
      );

      if (hasDublicate) {
        setError(language?.form?.errorDuplicate);
        return;
      }

      setContacts({ ...form, id: findedContact.id });
    } else {
      const id = Date.now();
      const hasDublicate = contacts.some((el) => el.phone === form.phone);

      if (hasDublicate && !isEdit.isEdit) {
        setError(language?.form?.errorDuplicate);
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
        placeholder={language?.form?.placeName}
        onChange={handleSimpleInput}
      />
      <input
        type="text"
        value={form.lastName}
        name="lastName"
        placeholder={language?.form?.placeLastName}
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
          {language?.form?.buttonSend}
        </button>
        <button type="button" className="btn-cancel" onClick={handleBack}>
          {language?.form?.buttonBack}
        </button>
      </div>
    </form>
  );
};

export default ContactAdd;
