import React from "react";
import EmployeeCard from "../EmployeeCard";

function ResultList(props) {
  // Map over this.state.employees and render a EmployeeCard component for each employee object
  return (
    <ul className="list-group">
   
      {props.results.map(result => (
        <EmployeeCard
          removeEmployee={result.removeEmployee}
          id={result.id}
          key={result.id}
          name={result.name}
          image={result.image}
          occupation={result.occupation}
          location={result.location}>
        </EmployeeCard> 
      ))}
    </ul>
  );
}

export default ResultList;
