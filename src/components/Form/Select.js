import styles from "./Select.module.css";

function Selecct({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option selected disabled>
          Select project type
        </option>
      </select>
    </div>
  );
}

export default Selecct;
