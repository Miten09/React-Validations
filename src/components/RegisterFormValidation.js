import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

function RegisterFormValidation() {
  const [userinfo, setuserinfo] = useState("");

  function onSubmit(data) {
    setuserinfo(data);
    console.log(userinfo);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Fragment>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="username"
          placeholder="Please enter your username"
          {...register("username", { required: "Name is Required" })}
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Please enter your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Please enter your Password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 4,
              message: "password must be more than 4 characters",
            },
            maxLength: {
              value: 8,
              message: "password must be less than 8 characters",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </Fragment>
  );
}

export default RegisterFormValidation;
