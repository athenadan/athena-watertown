import React, { useState } from "react";
import { addUser } from "./api/userApi";
import { Redirect } from "react-router-dom";
import Input from "./Input";

const ManageUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [saveCompleted, setSaveCompleted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault(); // stop browser from posting back
    const savedUser = await addUser(user);
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
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          type="text"
          onChange={handleUserChange}
          value={user.name}
        />
        <Input
          label="email"
          id="email"
          type="email"
          onChange={handleUserChange}
          value={user.email}
        />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

export default ManageUser;
