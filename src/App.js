import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Dan", email: "d@r.com" },
    { id: 2, name: "Sarah", email: "s@k.com" },
    { id: 3, name: "Jeff", email: "j@b.com" }
  ]);

  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  function handleDelete(id) {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers); // update State so react knows to rerender
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        users
      </h1>
      <ul>
        {users.map(user => (
          <li>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            {user.name}
          </li>
        ))}
      </ul>
      <label htmlFor="firstName">First name </label>
      <input id="firstName" type="text"></input>
      <p>My App.</p>
    </>
  );
}

export default App;
