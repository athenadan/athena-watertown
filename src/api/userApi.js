// API proxy (make http calls for my app)

export function getUsers() {
  return fetch("http://localhost:3001/users").then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}

// write getDelete function here: hint: google mdn use fetch
export function deleteUser(userId) {
  return fetch("http://localhost:3001/users" + userId, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}
