// API proxy (make http calls for my app)

export async function getUsers() {
  const response = await fetch("http://localhost:3001/users");
  if (response.ok) {
    return response.json();
  }
  throw new Error("Bad network response.");
}

// write getDelete function here: hint: google mdn use fetch
export async function deleteUser(userId) {
  const response = await fetch("http://localhost:3001/users/" + userId, {
    method: "DELETE"
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error("Bad network response.");
}
