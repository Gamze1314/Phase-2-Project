import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SearchBar() {
  const [search, setSearch] = useState("All");

  console.log(search);

  //set search to user selection, and update state
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form.Select
        className="w-auto text-start"
        aria-label="Default select example"
        onChange={handleSearchChange}
        value={search}
      >
        <option value="All">All</option>
        <option value="Most Liked">Most Liked</option>
        <option value="Users">Users</option>
      </Form.Select>
    </div>
  );
}

export default SearchBar;
