export const JobInfo = ({ job }) => {
  return (
    <div className="job-info">
      <div className="job-company">
        <h3>{job.company}</h3>
        {job.new && <div className="job-new">New!</div>}
        {job.featured && <div className="job-featured">Featured</div>}
      </div>
      <h2>{job.position}</h2>
      <p>{`${job.postedAt} ᐧ ${job.contract} ᐧ ${job.location}`}</p>
    </div>
  );
};
