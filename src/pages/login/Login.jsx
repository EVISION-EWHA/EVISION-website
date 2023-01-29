import React from "react";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        marginTop: "200px",
      }}
    >
      <h1>Login page</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
export default Login;
