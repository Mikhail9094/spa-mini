import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./customForm.module.scss";
import { FormData, FormProps } from "../../components/CustomForm/types";
import Loading from "../Loading";

function CustomForm({ title, fields, onSubmit, className, errorMessage, isLoading }: FormProps) {
  const [formData, setFormData] = useState<FormData>({});

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <h2 className={styles.form__title}>{title}</h2>
      {fields.map((field) => (
        <div className={styles["form__wrapper-input"]} key={field.name}>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={formData[field.name] || ""}
            onChange={handelChange}
            placeholder="password"
            required={field.required}
          />
          <label htmlFor={field.name}>{field.label}:</label>
        </div>
      ))}

      <div className={styles.form__action}>
        <button type="submit" className={styles["form__action-button"]}>
          {isLoading ? <Loading /> : "Войти"}
        </button>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
}

export default CustomForm;
