import { useFormik } from "formik";

import validationSchema from "./validations";

function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <div className="error"> {errors.email} </div>
        )}

        <br />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <div className="error"> {errors.password} </div>
        )}

        <br />
        <br />

        <label>Confirm Password</label>
        <input
          type="passwordConfirm"
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
        />
        {errors.password && touched.passwordConfirm && (
          <div className="error"> {errors.passwordConfirm} </div>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;
