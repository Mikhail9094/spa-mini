import styles from "./customLink.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ICustomLinkProps } from "./types";

const CustomLink = ({ nameLink, img, to, addClass, classIfLocationTrue }: ICustomLinkProps) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link className={`${styles.link} ${isActive ? classIfLocationTrue : ""} ${addClass}`} to={to}>
      {img && <img src={img} alt="" />}
      {nameLink}
    </Link>
  );
};

export default CustomLink;
