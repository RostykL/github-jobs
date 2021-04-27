import style from "../styles/Details.module.scss";

import Nav from "../components/Nav";
import Sidebar from "../components/DetailsSideBar";
import JobDescription from "../components/JobDescription";

const details = () => {
  return (
    <>
      <Nav />
      <main className={style.main}>
        <Sidebar />
        <JobDescription />
      </main>
    </>
  );
};

export default details;
