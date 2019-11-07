import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";
import { Link } from "react-router-dom";

function Users() {
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
    // debugger;
    // setUsers(newUsers); // update State so react knows to rerender
    deleteUser(id).then(() => {
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers);
    });
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        People
      </h1>
      <Link to="/user">Add user</Link>
      {/* display user data in table that shows id, name, and email */}
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
