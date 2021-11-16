import { JobInfo } from "./JobInfo";
import { JobStack } from "./JobStack";

const Position = ({ job }) => {
  return (
    <div className={`job-opening ${job.featured && "border-left"}`} id={job.id}>
      <div className="job-logo">
        <img
          src={`${process.env.PUBLIC_URL}/images/${job.logo}`}
          alt={job.company}
        />
      </div>
      <JobInfo job={job} />
      <JobStack job={job} />
    </div>
  );
};

export default Position;
