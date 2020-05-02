import React, { Component } from 'react';
import employees from "./employees.json";
import SearchForm from "./SearchForm";
import EmployeeCard from "../EmployeeCard"


class EmployeesResultContainer extends Component {
  state = {
    search: "",
    results: employees,
    employees
  }

  searchEmployees = search => {
    // Filter this.state.employees for employees with a name,location,or occupation that is approximate to the search made by user
    const results = this.state.employees.filter(result =>
      result.name.toLowerCase().indexOf(search) !== -1 || result.occupation.toLowerCase().indexOf(search) !== -1 || result.location.toLowerCase().indexOf(search) !== -1);
    this.setState({ results });

  };

  removeEmployee = id => {
    // // Filter this.state.employees for employees with an id not equal to the id being removed
    const results = this.state.results.filter(employee => employee.id !== id);
    // // Set this.state.employees equal to the new employees array
    this.setState({ results });
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Employees JSON for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (

      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
          {this.state.results.map(result => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
              id={result.id}
              key={result.id}
              name={result.name}
              image={result.image}
              occupation={result.occupation}
              location={result.location}>
            </EmployeeCard>
          ))}
      </div>
    )
  }
}

export default EmployeesResultContainer