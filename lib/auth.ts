// export const signupUser = (user: any) => {
//   localStorage.setItem("user", JSON.stringify(user));
// };

// export const loginUser = (email: string, password: string, role: string) => {
//   const stored = localStorage.getItem("user");
//   if (!stored) return null;

//   const user = JSON.parse(stored);
//   if (
//     user.email === email &&
//     user.password === password &&
//     user.role === role
//   ) {
//     localStorage.setItem("auth", "true");
//     return user;
//   }
//   return null;
// };

// export const logout = () => {
//   localStorage.removeItem("auth");
// };

// export const isAuthenticated = () => {
//   return localStorage.getItem("auth") === "true";
// };


// User interface for type safety
export interface User {
  name: string;
  email: string;
  password: string;
  role: "doctor" | "patient";
}

// Sign up a new user
export const signupUser = (user: User) => {
  // Store all users in an array to support multiple users
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  // Auto-login after signup
  localStorage.setItem("currentUser", JSON.stringify(user));
  localStorage.setItem("auth", "true");
};

// Get all users from localStorage
export const getUsers = (): User[] => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

// Login user with email, password, and role
export const loginUser = (
  email: string,
  password: string,
  role: string
): User | null => {
  const users = getUsers();
  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password &&
      u.role === role
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("auth", "true");
    return user;
  }
  return null;
};

// Get current logged-in user
export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

// Get current user role
export const getCurrentUserRole = (): "doctor" | "patient" | null => {
  const user = getCurrentUser();
  return user ? user.role : null;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("auth") === "true";
};

// Check if user has specific role
export const hasRole = (role: "doctor" | "patient"): boolean => {
  const currentRole = getCurrentUserRole();
  return currentRole === role;
};

// Logout user
export const logout = (): void => {
  localStorage.removeItem("auth");
  localStorage.removeItem("currentUser");
};
