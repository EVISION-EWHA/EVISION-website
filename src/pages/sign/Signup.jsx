import React from "react";

function Signup() {
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
      <h1>Signup page</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
export default Signup;
