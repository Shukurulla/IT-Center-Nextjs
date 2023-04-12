import style from "./component.module.css";

const Button = ({ children }) => {
  return <button className={style.component__button}>{children}</button>;
};

export default Button;
