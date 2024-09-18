import CustomForm from "../../components/CustomForm";
import { useLogIn } from "../../hooks/auth/useLogIn";
import { fields } from "./constants";
import styles from "./login.module.scss";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { mutate: logIn, error, isPending } = useLogIn();

  return (
    <div className={styles.login}>
      <CustomForm
        title="Авторизация"
        fields={fields}
        onSubmit={logIn}
        errorMessage={error ? "Неверный логин или пароль" : ""}
        isLoading={isPending}
      />
    </div>
  );
}

export default Login;
