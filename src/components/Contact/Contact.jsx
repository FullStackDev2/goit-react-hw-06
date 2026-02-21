import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaPhoneAlt } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import styles from "./Contact.module.css";


const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.card}>
      <div className={styles.info}>
        <div className={styles.row}>
          <VscAccount className={styles.icon} />
          <p className={styles.name}>{contact.name}</p>
        </div>

        <div className={styles.row}>
          <FaPhoneAlt className={styles.icon} />
          <p className={styles.number}>{contact.number}</p>
        </div>
      </div>

      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;