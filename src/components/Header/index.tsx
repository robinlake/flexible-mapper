import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/images/gender.svg" alt="Flexy" />
      <h1>Flexmap</h1>
    </div>
  );
};
export default Header;
