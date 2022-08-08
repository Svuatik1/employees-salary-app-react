import "./app-info.css";

const AppInfo = ({ data }) => {
  return (
    <div className="app-info">
      <h1>Employees in company "Nova Poshta"</h1>
      <h2>Total value employees: {data.length}</h2>
      <h2>
        Prize will be recived: {data.filter((item) => item.increase).length}
      </h2>
    </div>
  );
};

export default AppInfo;
