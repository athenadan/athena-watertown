import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Users({ users, deleteUser }) {
  const h1Style = {
    color: "red",
    marginBottom: 20
  };

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
                <button
                  aria-label={`Delete user ${user.name}`}
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
                <Link to={"/user/" + user.id}>
                  <button>
                    Edit{" "}
                    <span role="img" aria-label="edit">
                      ✏️
                    </span>
                  </button>
                </Link>
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default Users;
