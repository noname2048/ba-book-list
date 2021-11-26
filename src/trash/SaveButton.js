import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function TypicalButton({ text, fontSize = 12 }) {
  return (
    <button
      className={styles.btn}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize,
      }}
    >
      Save Change
    </button>
  );
}

TypicalButton.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};
