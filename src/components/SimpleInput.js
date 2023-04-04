import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredNameTouched, setenteredNameTouched] = useState(false);

  const enteredNameisValid = enteredName.trim() !== "";
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameisValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setenteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true);
    if (!enteredNameisValid) {
      return;
    }

    setenteredName("");
    setenteredNameTouched(false);
    console.log(enteredName);
  };

  const nameInputClasses = nameInputisInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputisInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
