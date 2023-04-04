import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setenteredName] = useState("");
  const [enteredNameisValid, setenteredNameisValid] = useState(false);
  const [enteredNameTouched, setenteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameisValid) {
      console.log("Name Input is valid");
    }
  }, [enteredNameisValid]);

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true);
    if (enteredName == "") {
      setenteredNameisValid(false);
      return;
    }
    setenteredNameisValid(true);
    setenteredName("");
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);
  };
  //true            //false
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;

  const nameInputClasses = nameInputisInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {nameInputisInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
