import style from "../../styles/Details.module.scss";

import Nav from "../../components/Nav";
import Sidebar from "../../components/DetailsSideBar";
import JobDescription from "../../components/JobDescription";

import { getJob, getAll } from "../../services/jobs";

export async function getStaticProps({ params }) {
  const job = await getJob(params.id);

  return {
    props: {
      job: job,
    },
  };
}

export const getStaticPaths = async () => {
  const jobs = await getAll();
  const paths = jobs.map((job) => {
    return {
      params: { id: job.id },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

const details = ({ job }) => {
  return (
    <>
      <Nav />
      <main className={style.main}>
        <Sidebar />
        <JobDescription job={job} />
      </main>
    </>
  );
};

export default details;
