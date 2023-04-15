import style from "./component.module.css";
import Link from "next/link";

const Button = ({ children, link }) => {
  return (
    <Link className={style.component__button} href={link}>
      {children}
    </Link>
  );
};

export default Button;
