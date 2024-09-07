import style from "./Footer.module.scss";
import Navigation from "./Navigation";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
}

export default Footer;
