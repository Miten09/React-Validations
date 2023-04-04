import { useState, Fragment } from "react";
import React from "react";

function NewForm() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [error, seterror] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (firstname.length === 0 || lastname.length === 0) {
      seterror(true);
      return;
    }
    console.log(firstname, lastname);
  }

  function firstNameHandler(e) {
    setfirstname(e.target.value);
  }

  function secondNameHandler(e) {
    setlastname(e.target.value);
  }

  return (
    <Fragment>
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="Please Enter Firstname"
          onChange={firstNameHandler}
        />
        {error && firstname.length <= 0 ? (
          <span style={{ color: "red" }}>Firstname can't be empty</span>
        ) : (
          ""
        )}

        <br />
        <br />
        <input
          type="text"
          name="lastname"
          placeholder="Please Enter Lastname"
          onChange={secondNameHandler}
        />
        {error && lastname.length <= 0 ? (
          <span style={{ color: "red" }}>Lastname can't be empty</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </Fragment>
  );
}

export default NewForm;
