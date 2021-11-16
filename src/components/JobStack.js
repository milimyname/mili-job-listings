import { useSelector, useDispatch } from "react-redux";
import { addTags } from "../state/slices/jobsSlice";

export const JobStack = ({ job }) => {
  const tags = useSelector((state) => state.position.tags);
  const dispatch = useDispatch();

  const handleClickBtn = (tag) => {
    if (tags && !tags.includes(tag)) dispatch(addTags({ tag }));
  };

  return (
    <div className="job-stack">
      {[job.role, job.level, ...job.tools, ...job.languages].map((tag, i) => (
        <button
          className="btn-click"
          key={i}
          onClick={() => handleClickBtn(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
