import React, { Component } from 'react';
import employees from "./employees.json";
import SearchForm from "../SearchForm";
import EmployeeCard from "../EmployeeCard";
import Wrapper from "../Wrapper";
import "./style.css";


class EmployeesResultContainer extends Component {
  state = {
    search: "",
    results: employees,
    employees
  }

  searchEmployees = search => {
    this.setState({results: employees});
    // Filter for employees with a name,location,or occupation that is approximate to the search made by user
    const results = this.state.employees.filter((result) => {
     return result.name.toLowerCase().includes(search.toLowerCase()) !== false || result.occupation.toLowerCase().includes(search.toLowerCase()) !== false  || result.location.toLowerCase().includes(search.toLowerCase()) !== false 
    })
    this.setState({ results });
    
  };

    // responsible for removing employees from directory
  removeEmployee = id => {
    // // Filter for employees with an id not equal to the id being removed
    const results = this.state.results.filter(employee => employee.id !== id);
    this.setState({ results });
  };

  // responsible for searching employees as user types on search bar
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    event.preventDefault();
    setTimeout(() => {
     return this.searchEmployees(this.state.search);
    }, 1000);
  };

  render() {
    return (

      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />

        <div className='row'>
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
    
      </div>
    )
  }
}

export default EmployeesResultContainer