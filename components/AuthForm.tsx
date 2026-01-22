// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signupUser, loginUser } from "@/lib/auth";
// import { motion } from "framer-motion";

// export default function AuthForm({ type }: { type: "login" | "signup" }) {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "doctor",
//   });
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     if (!form.email || !form.password || (type === "signup" && !form.name)) {
//       setError("All fields are required");
//       return;
//     }

//     if (type === "signup") {
//       signupUser(form);
//       router.push("/");
//     } else {
//       const user = loginUser(form.email, form.password, form.role);
//       if (!user) return setError("Invalid credentials");

//       router.push(`/dashboard/${user.role}`);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white p-8 shadow-lg rounded w-full max-w-md"
//     >
//       <h2 className="text-2xl font-bold mb-4 text-black">
//         {type === "login" ? "Login" : "Signup"}
//       </h2>

//       {type === "signup" && (
//         <input
//           placeholder="Full Name"
//           className="input"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />
//       )}

//       <input
//         placeholder="Email"
//         className="input"
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         className="input"
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />

//       <select
//         className="input"
//         onChange={(e) => setForm({ ...form, role: e.target.value })}
//       >
//         <option value="doctor">Doctor</option>
//         <option value="patient">Patient</option>
//       </select>

//       {error && <p className="text-red-500 text-sm">{error}</p>}

//       <button onClick={handleSubmit} className="btn">
//         {type === "login" ? "Login" : "Signup"}
//       </button>
//     </motion.div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupUser, loginUser, getUsers } from "@/lib/auth";

export default function AuthForm({
  type,
}: {
  type: "login" | "signup";
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "doctor" as "doctor" | "patient",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validation
    if (!form.email || !form.password || (type === "signup" && !form.name)) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      if (type === "signup") {
        // Check if user already exists
        const users = getUsers();
        const existingUser = users.find(
          (u) => u.email === form.email && u.role === form.role
        );
        if (existingUser) {
          setError("User with this email and role already exists");
          setIsLoading(false);
          return;
        }
        signupUser(form);
        // Auto-login after signup and redirect to dashboard
        const user = loginUser(form.email, form.password, form.role);
        if (user) {
          router.push(`/dashboard/${user.role}`);
        } else {
          // If auto-login fails, redirect to login page
          router.push("/");
        }
        return;
      } else {
        const user = loginUser(form.email, form.password, form.role);
        if (!user) {
          setError("Invalid credentials. Please check your email, password, and role.");
          setIsLoading(false);
          return;
        }
        router.push(`/dashboard/${user.role}`);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white text-black p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
            <span className="text-white text-2xl">🏥</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            {type === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-gray-600 text-sm">
            {type === "login"
              ? "Sign in to continue to CuraDoc"
              : "Join CuraDoc healthcare platform"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {type === "signup" && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              I am a
            </label>
            <select
              value={form.role}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200 bg-white"
              onChange={(e) =>
                setForm({ ...form, role: e.target.value as "doctor" | "patient" })
              }
              required
            >
              <option value="doctor">👨‍⚕️ Doctor</option>
              <option value="patient">👤 Patient</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
          >
            {isLoading
              ? "Processing..."
              : type === "login"
              ? "Sign In"
              : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {type === "login" ? (
            <p>
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-black font-semibold hover:underline"
              >
                Sign up
              </a>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <a
                href="/"
                className="text-black font-semibold hover:underline"
              >
                Sign in
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
