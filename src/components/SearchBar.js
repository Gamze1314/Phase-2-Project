import React from "react";
import Form from "react-bootstrap/Form";

function SearchBar({ onSearchChange , search }) {

  return (
    <div className="d-flex justify-content-center">
      <Form.Select
        className="w-auto text-start"
        aria-label="Default select example"
        onChange={onSearchChange}
        value={search}
      >
        <option value="Search">Search</option>
        <option value="All">All</option>
        <option value="Most Liked">Most Liked</option>
        <option value="Users">Who to Follow</option>
      </Form.Select>
    </div>
  );
}

export default SearchBar;
