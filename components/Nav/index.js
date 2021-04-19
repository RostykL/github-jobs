import style from "./nav.module.css";
import { Column, Logo, Unbold } from "./navstyled";

const Nav = () => {
  return (
    <header className={style.header}>
      <nav className="nav">
        <div className="row">
          <Column>
            <Logo>
              Github <Unbold>Jobs</Unbold>
            </Logo>
          </Column>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
