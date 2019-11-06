import React from "react";

function App() {
  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  const users = [
    { id: 1, name: "Dan", email: "d@r.com" },
    { id: 1, name: "Sarah", email: "s@k.com" },
    { id: 1, name: "Jeff", email: "j@b.com" }
  ];

  return (
    <>
      <h1 className="header" style={h1Style}>
        App
      </h1>
      <label htmlFor="firstName">First name </label>
      <input id="firstName" type="text"></input>
      <p>My App.</p>
    </>
  );
}

export default App;
