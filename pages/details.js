import style from "../styles/Details.module.scss";

import Nav from "../components/Nav";
import Sidebar from "../components/DetailsSideBar";

const details = () => {
  return (
    <>
      <Nav />
      <main className={style.main}>
        <Sidebar />
      </main>
    </>
  );
};

export default details;
