import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All coworkers
      </button>
      <button className="btn btn-outline-light" type="button">
        Coworkers to upgrade
      </button>
      <button className="btn btn-outline-light" type="button">
        Salary more 1000$
      </button>
    </div>
  );
};

export default AppFilter;
