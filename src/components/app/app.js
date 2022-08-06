import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Ivan M.",
          salary: "1900$",
          increase: false,
          id: 1,
        },
        {
          name: "Oleg P.",
          salary: "700$",
          increase: false,
          id: 2,
        },
        {
          name: "Volodumur O.",
          salary: "8200$",
          increase: false,
          id: 3,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    this.setState({
      data: [
        ...this.state.data,
        {
          name,
          salary: salary + "$",
          increase: false,
          id: this.state.data[this.state.data.length - 1].id + 1,
        },
      ],
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
