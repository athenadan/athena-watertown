import React, { useState, useEffect } from "react";
import { getUsers } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render
  useEffect(() => {
    // using _users to avoid confusion with "users" above
    getUsers().then(_users => setUsers(_users));
  }, []);

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
