import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeesResultContainer from "./components/EmployeesResultContainer";

class App extends Component {
  // Setting this.state.employees to the employees json array

  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
          <EmployeesResultContainer/>
      </Wrapper>
    );
  }
}

export default App;