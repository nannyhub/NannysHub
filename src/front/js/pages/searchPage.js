import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export const SearchPage = () => {
  return (
    <>
      <Form className="d-flex">
        <FormControl
          id="search-bar"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
};
