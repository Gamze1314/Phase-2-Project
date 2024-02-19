import React from "react";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <div className="d-flex justify-content-center">
      <Form.Select
        className="w-auto text-start"
        aria-label="Default select example"
      >
        <option>Preferences</option>
        <option value="1">All</option>
        <option value="2">Most Liked</option>
        <option value="3">Users</option>
      </Form.Select>
    </div>
  );
}

export default SearchBar;
