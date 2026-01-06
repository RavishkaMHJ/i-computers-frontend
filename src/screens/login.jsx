import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //function login() {
  //  axios
  //    .post("http://localhost:3000/users/login", {
  //      email: email,
  //      password: password,
  //    })
  //    .then((response) => {
  //      console.log(response);
  //    })
  //    .catch((error) => {
  //      console.log(error);
  //    });
  //}

  async function login() {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);

      if (response.data.role == "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      toast.success("Login Succesfully");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/backgroundimg.jpg')] bg-cover bg-center relative flex overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/70 to-secondary/60"></div>

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full"></div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[60%] h-[65%] z-100 bg-accent/10 flex justify-center items-center rounded-xl border border-primary/20 p-3">
          <div className="w-[50%] h-full flex flex-col justify-center items-cente p-3 text-center">
            <img
              src="/logo.png"
              className="w-[500px] drop-shadow-[0_0_25px_rgba(2,169,247,0.35)]"
              alt="RPS Logo"
            />

            <h1 className="text-4xl font-extrabold text-white tracking-wider">
              Real PC Solutions
            </h1>

            <p className="mt-4 text-primary/70 max-w-md leading-relaxed">
              High-performance PC components, custom builds, and expert
              solutions for professionals and gamers.
            </p>
          </div>

          <div className="w-[50%] h-full flex flex-col justify-center items-center p-4">
            <div className="w-full h-full p-8 rounded-xl backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <h2 className="text-3xl font-bold text-primary text-center mb-8 tracking-[2px]">
                Sign Up
              </h2>

              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full h-11 px-5 mb-2 rounded-[10px] bg-white/20 text-primary placeholder:text-primary outline-none border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/40 transition"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full h-11 px-5 mb-2 rounded-[10px] bg-white/20 text-primary placeholder:text-primary outline-none border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/40 transition"
              />

              <p className="text-right text-sm text-primary mb-6">
                Forgot Password?{" "}
                <Link
                  to="/forgot-password"
                  className="text-accent hover:underline hover:opacity-90"
                >
                  Reset
                </Link>
              </p>

              <button
                onClick={login}
                className="w-full h-[42px] rounded-[10px] bg-accent text-white font-semibold tracking-wide shadow-[0_10px_30px_rgba(2,169,247,0.45)] hover:brightness-110 active:scale-[0.98] transition mb-4"
              >
                Login
              </button>

              <button className="w-full h-[42px] rounded-[10px] border border-accent/60  text-accent font-semibold  hover:bg-accent hover:text-white shadow-md transition mb-3">
                Login with Google
              </button>

              <p className="text-center text-sm text-primary">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-accent font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
