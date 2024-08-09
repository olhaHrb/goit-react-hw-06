import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.searchBox}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        // value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
};

export default SearchBox;
