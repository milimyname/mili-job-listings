import { useDispatch } from "react-redux";
import { clearTags, deleteTag } from "../state/slices/jobsSlice";

const Tags = ({ tags }) => {
  const dispatch = useDispatch();
  return (
    <div className="tags-tab">
      {tags.map((tag, i) => (
        <button
          className="btn-tag"
          key={i}
          onClick={() => dispatch(deleteTag({ tag: tag }))}
        >
          <span className="span-tag">{tag}</span>
          <img
            className="icon-bg"
            src={`${process.env.PUBLIC_URL}/images/icon-remove.svg`}
            alt={tag}
          />
        </button>
      ))}
      <button onClick={() => dispatch(clearTags())} className="btn-clear">
        Clear
      </button>
    </div>
  );
};

export default Tags;
