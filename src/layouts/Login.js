import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({email: "", password: ""});
  const handleChange = ({target}) => {
    setData((prev)=>({...prev, [target.name]: target.value}))
  };
  return (
    <div className="login">
      <form>
        <div>
          <label htmlFor="name">email</label>
          <input
            onChange={handleChange}
            className="border-2"
            type="text"
            id="name"
            name="email"
            value={data.email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="border-2"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
