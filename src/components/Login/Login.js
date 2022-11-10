import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getJWTToken } from "../../utilities/getToken";
import { AuthContext } from "../Context/UserContext";
import loginImg from "../../assets/Images/Login-pana.svg";

const Login = () => {
  const { loginUser, googleSignUp } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const [buffer, setBuffer] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    setBuffer(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(async (result) => {
        const user = result.user;
        //console.log(user);
        const currentUser = {
          email: user.email,
        };
        await getJWTToken(currentUser);
        setBuffer(false);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setBuffer(false);
      });
  };
  const handleGoogleSignUp = () => {
    setBuffer(true);
    googleSignUp()
      .then(async (result) => {
        const user = result.user;
        // console.log(user);
        const currentUser = {
          email: user.email,
        };
        await getJWTToken(currentUser);
        setError("");
        setBuffer(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setBuffer(false);
        setError(errorMessage);
      });
  };
  return (
    <div>
      {buffer && (
        <div className="w-full mt-14">
          <div className="loader mx-auto"></div>
        </div>
      )}
      <div className="w-11/12 mt-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-row justify-center items-center">
            <img
              className="w-full sm:w-4/5 md:w-3/5 lg:w-3/5"
              src={loginImg}
              alt=""
            />
          </div>

          <div className="card  shadow-2xl  w-full sm:w-4/5 md:w-3/5 lg:w-3/5 mx-auto">
            <form onSubmit={handleLoginFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              {error && <p className="text-red-700">{error}</p>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="form-control mt-6">
                <p>
                  <small>
                    No Account? Please <Link to="/register">Register</Link>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <div className="flex flex-row items-baseline">
                  <hr className="w-1/2 h-0.5 bg-slate-600" />
                  <p>
                    <small>OR</small>
                  </p>
                  <hr className="w-1/2 h-0.5 bg-slate-600" />
                </div>
              </div>
            </form>
            <div className="mb-8 text-center">
              <button
                onClick={handleGoogleSignUp}
                className="btn bg-slate-600 text-white"
              >
                Sign in With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
