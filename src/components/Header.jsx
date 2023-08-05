import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import Logo_red from "../assets/logo_red.svg";

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={Logo_red} alt="" className={classes.header_logo} />
      <nav>
        <ul className={classes.header_list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${classes.header_link} ${
                  isActive ? classes.header_link_active : ''
                }`
              }
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${classes.header_link} ${
                  isActive ? classes.header_link_active : ''
                }`
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}