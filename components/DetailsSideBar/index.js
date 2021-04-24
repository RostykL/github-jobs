import Link from "next/link";
import style from "./sidebar.module.scss";
import { Row1 } from "./sidebarStyled";

import { ArrowIcon } from "./svg";

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Row1>
        <div className="col">
          <Link href="/">
            <a className={style.backButton}>
              <span className={style.iconWrapper}>
                <ArrowIcon />
              </span>
              Back to search
            </a>
          </Link>
        </div>
      </Row1>
      <div className="row2">
        <div className="col">
          <h3>How to apply</h3>
          <p>
            Please email a copy of your resume and online portfolio to{" "}
            <a href="mailto:wes@kasisto.com">wes@kasisto.com</a> & CC{" "}
            <a href="mailto:eric@kasisto.com">eric@kasisto.com</a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
