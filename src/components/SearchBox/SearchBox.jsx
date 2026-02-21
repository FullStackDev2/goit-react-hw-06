import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";


const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={styles.searchCard}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name :
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter the name you wish to search for..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;