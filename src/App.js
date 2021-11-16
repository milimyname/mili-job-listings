import Position from "./components/Position";
import jobs from "./data/data";
import Tags from "./components/Tags";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const [filteredJobs, SetFilteredJobs] = useState([]);
  const tags = useSelector((state) => state.position.tags);

  useEffect(() => {
    if (tags.length === 0) return SetFilteredJobs(jobs);
    SetFilteredJobs(
      jobs.filter((job) =>
        tags.every((tag) =>
          [job.role, job.level, ...job.tools, ...job.languages].includes(tag)
        )
      )
    );
  }, [tags]);

  return (
    <>
      <header>{tags && tags.length > 0 && <Tags tags={tags} />}</header>
      <main>
        {filteredJobs.map((job, i) => (
          <Position key={i} job={job} />
        ))}
      </main>
    </>
  );
}

export default App;
