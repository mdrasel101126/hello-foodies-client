import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const items = (
    <>
      <li>
        <Link to="/" className="lg:text-white font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/myreviews" className="lg:text-white font-bold ">
          My Reviews
        </Link>
      </li>
      <li>
        <Link to="/blogs" className="lg:text-white font-bold ">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/reviews" className="lg:text-white font-bold">
          Reviews
        </Link>
      </li>
      <li>
        <Link to="/register" className="lg:text-white font-bold">
          Register
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-slate-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          HelloFoodies
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{items}</ul>
      </div>
      <div className="navbar-end">
        {/*  <a className="btn">Get started</a> */}
        {user?.uid ? (
          <>
            {user.photoURL ? (
              <img
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                src={user.photoURL}
                alt=""
              />
            ) : (
              <FaUserAlt className="w-10 h-10 text-white"></FaUserAlt>
            )}
            <button onClick={handleLogOut} className="btn btn-primary">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="text-white font-bold lg:mr-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
