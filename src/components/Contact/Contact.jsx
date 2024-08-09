import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  return (
    <ul>
      <li className={css.card} key={id}>
        <ul>
          <li className={css.data}>
            <FaUser />
            {name}
          </li>
          <li className={css.data}>
            <FaPhone />
            {number}
          </li>
        </ul>
        <button>Delete</button>
      </li>
    </ul>
  );
};

export default Contact;
