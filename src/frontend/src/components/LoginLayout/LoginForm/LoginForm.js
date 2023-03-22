import { useRef } from "react";

import styles from "./LoginForm.module.scss";

const LoginForm = (props) => {
  const emailInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    const fetchData = {
        email: enteredEmail
    }

    const response = await fetch("http://44.202.40.149:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fetchData),
    });

    console.log(response);

    const responseData = await response.json();

    console.log(responseData);
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.field}>
          <input placeholder="Email Address" type="email" ref={emailInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Login</button>
          <p>Or</p>
          <button>Sign in with your Dell account</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
