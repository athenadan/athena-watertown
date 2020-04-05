import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect, useRouteMatch } from "react-router-dom";
import Input from "./Input";

const ManageUser = ({ users, addNewUser, editExistingUser }) => {
  const match = useRouteMatch(); // info about the matching url
  const { userId } = match.params;
  const [saveCompleted, setSaveCompleted] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    if (userId && users.length > 0) {
      const userToEdit = users.find(user => user.id === parseInt(userId, 10));
      if (!userToEdit) return; // TODO show 404 page since user isn't found
      setUser(userToEdit);
      // debugger;
    }
  }, [userId, users]);

  const headerText = userId ? "Edit User" : "Add User";

  async function handleSubmit(event) {
    event.preventDefault();
    userId ? await editExistingUser(user) : await addNewUser(user);
    setSaveCompleted(true);
  }

  function handleUserChange(event) {
    // Use computed property syntax to reference a property using a variable
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  // could destructure user...
  // const { name, email } = user;

  return (
    <>
      {saveCompleted && <Redirect to="/users" />}
      <h1>{headerText}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          type="text"
          onChange={handleUserChange}
          value={user.name}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          onChange={handleUserChange}
          value={user.email}
        />
        <br />
        <input
          type="submit"
          value="Save
        "
        />
      </form>
    </>
  );
};

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  addNewUser: PropTypes.func.isRequired,
  editExistingUser: PropTypes.func.isRequired
};

export default ManageUser;
