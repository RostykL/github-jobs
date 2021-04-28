import style from "./jobDescription.module.scss";
import { job } from "../../utils/fakeData";
import { TimeIcon, WorldIcon } from "./Icon";

const JobDescription = () => {
  return (
    <section className={style.description}>
      <div className={style.row1}>
        <div className={style.column}>
          <h2 className={style.h2}>{job.position}</h2>
          <span className={style.type}>{job.type}</span>
          <span className={style.time}>
            <TimeIcon />
            {job.timePosted}
          </span>
        </div>
      </div>
      <div className={style.row2}>
        <div className={style.column}>
          <img src={job.image} alt="company logo" className={style.logo} />
          <div>
            <h3 className={style.h3}>{job.company}</h3>
            <span className={style.location}>
              <WorldIcon />
              {job.location}
            </span>
          </div>
        </div>
      </div>
      <div className={style.row3}>
        <div
          className={style.column}
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></div>
      </div>
    </section>
  );
};

export default JobDescription;
