export function validateEmail(email) {
  if (email === "") {
    return "Email cannot be empty";
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Invalid email";
  }
  return null;
}

export function validatePassword(password) {
  if (password === "") {
    return "Password cannot be empty";
  }
  return password.length > 5 ? null : "Password must be at least 6 characters";
}
