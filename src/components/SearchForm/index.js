import React from "react";
import "./style.css"
import Container from "../Container"; 

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee, occupation, or location"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
