import Style from "./component.module.css";
const Container = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};

export default Container;
