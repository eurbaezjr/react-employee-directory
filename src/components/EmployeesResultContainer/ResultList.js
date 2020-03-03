import React from "react";
import EmployeeCard from "../EmployeeCard";

function ResultList(props) {
  // Map over this.state.employees and render a EmployeeCard component for each employee object
  return (
    <ul className="list-group">
        <EmployeeCard
          {...props}
          removeEmployee={props.removeEmployee}
          id={props.id}
          key={props.id}
          name={props.name}
          image={props.image}
          occupation={props.occupation}
          location={props.location}/>
    </ul>
  );
}

export default ResultList;
