import React, { useState, useEffect } from "react";
import { addUser, getUsers, deleteUser, editUser } from "./api/userApi";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import Nav from "./Nav";
import { Route } from "react-router-dom";
import InternationalizationContext from "./InternationalizationContext";

function App() {
  const [users, setUsers] = useState([]);
  const [language, setLanguage] = useState("English");

  // useEffect runs by default after every render
  useEffect(() => {
    // using _users to avoid confusion with "users" above
    getUsers().then(_users => setUsers(_users));
  }, []);

  function handleDelete(id) {
    // debugger;
    // setUsers(newUsers); // update State so react knows to rerender
    deleteUser(id).then(() => {
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers);
    });
  }

  async function addNewUser(user) {
    const savedUser = await addUser(user);
    setUsers([...users, savedUser]);
  }

  async function editExistingUser(user) {
    const savedUser = await editUser(user);

    // replace saved user in the array using "map"
    setUsers(users.map(u => (u.id === user.id ? savedUser : u)));
  }

  return (
    <InternationalizationContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage
      }}
    >
      {/* When the url is at root, load the users component */}
      <Nav />
      <Route path="/" component={Home} exact />
      <Route
        path="/users"
        render={props => {
          return <Users users={users} deleteUser={handleDelete} />;
        }}
      />
      {/* /:id? means that id may or may not be in the url */}
      <Route
        path="/user/:userId?"
        render={props => {
          return (
            <ManageUser
              users={users}
              addNewUser={addNewUser}
              editExistingUser={editExistingUser}
            />
          );
        }}
      />
    </InternationalizationContext.Provider>
  );
}

export default App;
