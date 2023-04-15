import Container from "../container";
import style from "../component.module.css";
import Link from "next/link";
import { navItems } from "@/constants/constanta";

const Footer = () => {
  return (
    <section className={style.footer__section}>
      <Container>
        <div className={style.footer__navigate}>
          <div className={style.footer__nav__items}>
            <h1 className={style.footer__header}>Bo’limlar</h1>
            <ul>
              {navItems.map((item) => (
                <li className={style.footer__list__item}>
                  <Link className={style.footer__link} href={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.footer__nav__items}>
            <h1 className={style.footer__header}>Biz bilan bog’lanish</h1>
            <ul>
              <li className={style.footer__list__item}>
                <Link href="tel:998902562527">Telefon: +998902562527</Link>
              </li>
              <li className={style.footer__list__item}>
                <Link href="mailto: abc@example.com">
                  Elektron pochta: example@gmail.com
                </Link>
              </li>
              <li className={style.footer__list__item}>
                <Link href="https://goo.gl/maps/HQfDGDBadyYwDPxi9">
                  Manzil: Khojeli, Pochta binos
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.footer__nav__items}>
            <h1 className={style.footer__header}>Tarmoqlar</h1>
            <ul>
              <li className={style.footer__list__item}>
                <Link href={"https://t.me/IT_CENTER_KHodjeyli"}>Telegram</Link>
              </li>
              <li className={style.footer__list__item}>
                <Link href={"https://t.me/IT_CENTER_KHodjeyli"}>
                  Instagramm
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
