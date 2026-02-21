import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";


const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const number = form.number.value.trim();

    if (!name || !number) return;

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    form.reset();
  };

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">İsim :</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter a name..."
            className={styles.input}
            required
            onInvalid={(e) => e.target.setCustomValidity("Please enter a name...")}
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="number">Telefon :</label>
          <input
            id="number"
            type="text"
            name="number"
            placeholder="Enter a number..."
            className={styles.input}
            required
            onInvalid={(e) => e.target.setCustomValidity("Please enter a valid phone number...")}
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;