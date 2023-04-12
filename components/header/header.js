import logo from "@/public/logost.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Style from "../component.module.css";
import { navItems } from "@/constants/constanta";
import Container from "../container";

const Header = () => {
  const [state, setState] = useState(navItems[0].label);
  return (
    <div>
      <header className={Style.header}>
        <Container>
          <nav className={Style.nav}>
            <div className="logo">
              {/* <Link href="/">
              <Image src={logo} width={130} height={40} />
            </Link> */}
              <h2>IT Center</h2>
            </div>
            <div className={Style.header__navigation}>
              <ul className={Style.nav__lists}>
                {navItems.map((item, idx) => (
                  <li className={Style.nav__list__item}>
                    <Link
                      className={`${
                        state == item.label ? Style.active : null
                      } ${Style.nav__list}`}
                      href={item.path}
                      onClick={() => setState(navItems[idx].label)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;
