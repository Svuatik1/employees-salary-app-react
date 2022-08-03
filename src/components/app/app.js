import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        top1
        <SearchPanel />
      </div>
    </div>
  );
}

export default App;
