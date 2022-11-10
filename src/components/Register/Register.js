import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import registerImg from "../../assets/Images/register.svg";
import { getJWTToken } from "../../utilities/getToken";

const Register = () => {
  const { createUser, updateUserProfile, setProfileUpdate } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [buffer, setBuffer] = useState(false);
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setBuffer(true);
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);
    createUser(email, password)
      .then(async (result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        await getJWTToken(currentUser);
        setBuffer(false);
        navigate("/");
        handleUpdateUser(name, photoURL);
        setError("");
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setBuffer(false);
        setError(errorMessage);
      });
  };
  const handleUpdateUser = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        // Profile updated!
        setProfileUpdate(true);
        navigate("/");

        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
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
              className="w-ful sm:w-4/5 md:w-3/5 lg:w-3/5"
              src={registerImg}
              alt=""
            />
          </div>
          <div className="card  shadow-2xl  w-full sm:w-4/5 md:w-3/5  lg:w-3/5 mx-auto">
            <form onSubmit={handleFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
              </div>
              {error && <p className="text-red-700">{error}</p>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <div className="form-control mt-6">
                <p>
                  <small>
                    Already Have an Account? Please{" "}
                    <Link to="/login">Login</Link>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
