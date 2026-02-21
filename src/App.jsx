import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>İletişim Kitabı </h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
