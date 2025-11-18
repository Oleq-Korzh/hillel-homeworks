import { debounce } from "../../utils/helpers";
import "./Toolbar.scss";

const Toolbar = ({ filters, setFilters }) => {
  const handleSetFilters = (key, e) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: e.target.value,
      };
    });
  };

  const handleSearch = (e) => {
    handleSetFilters("_search", e);
  };

  const handleSort = (e) => {
    handleSetFilters("_sort", e);
  };

  const handleSortStatus = (e) => {
    handleSetFilters("_status", e);
  };

  const handleSortPriority = (e) => {
    handleSetFilters("_priority", e);
  };

  const debounceSearchHandle = debounce(handleSearch, 300);

  return (
    <div className="toolbar">
      <div className="toolbar__left">
        <div className="control control--search">
          <input
            type="text"
            placeholder="Пошук за назвою…"
            onChange={debounceSearchHandle}
          />
        </div>
        <div className="control">
          <label>Priority</label>
          <select
            className="sort-priority"
            value={filters._priority}
            onChange={handleSortPriority}
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="control">
          <label>Status</label>
          <select
            className="sort-status"
            value={filters._status}
            onChange={handleSortStatus}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      <div className="toolbar__right">
        <div className="control">
          <label>Sort</label>
          <select className="sort" value={filters._sort} onChange={handleSort}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="priority">Priority (High→Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
