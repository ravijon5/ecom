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

export function validateField(value) {
  if (value === "") {
    return "Field cannot be empty";
  }
  return null;
}

export function validateZipCode(value) {
  if (value === "") {
    return "Field cannot be empty";
  }
  return value.length > 5 ? null : "Zip Code must be at least 6 characters";
}
