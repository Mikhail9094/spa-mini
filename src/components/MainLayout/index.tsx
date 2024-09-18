import styles from "./main.module.scss";
import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink";
import { navLinks } from "./constants";
import { useQueryClient } from "@tanstack/react-query";
import { TOKEN_LS_KEY } from "../../api/constants";

function MainLayout() {
  const client = useQueryClient();

  const logout = () => {
    localStorage.removeItem(TOKEN_LS_KEY);
    client.invalidateQueries({ queryKey: ["CheckAuth"] });
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.header__icons}>
          <CustomLink img="/img/header/apps.svg" to={"/"} addClass={styles["animation-icons"]} />
          <CustomLink img="/img/header/reply.svg" to={""} addClass={styles["animation-icons"]} />
        </div>
        <button onClick={logout} className={styles["header__button-exit"]}>
          Выход
        </button>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <nav className={styles.nav}>
        <button className={styles.nav__button}>
          <p>
            Название проекта
            <span>Аббревиатура</span>
          </p>
          <img src="/img/nav/arrow-down.svg" alt="" />
        </button>

        {navLinks.map((item) => {
          return (
            <CustomLink
              key={item.name}
              nameLink={item.name}
              to={item.to}
              addClass={styles.nav__links}
              classIfLocationTrue={styles.active}
              img={item.img}
            />
          );
        })}
      </nav>
    </div>
  );
}

export default MainLayout;
