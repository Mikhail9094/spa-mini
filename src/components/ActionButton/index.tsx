import { IButtonProps } from "./types";
import styles from "./actionButton.module.scss";

function ActionButton({ img, className, onClick, alt }: IButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      <img src={img} alt={alt} />
    </button>
  );
}

export default ActionButton;
