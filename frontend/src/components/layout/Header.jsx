import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { useLazyLogoutQuery } from "../../redux/api/authApi";
import logo from "./logo_jalviks.png"; // Import the logo

const Header = () => {
  const navigate = useNavigate();
  const { isLoading } = useGetMeQuery();
  const [logout] = useLazyLogoutQuery();
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    logout();
    navigate(0);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ padding: "20px 0" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="JalViks Logo"
            style={{ width: "40px", marginRight: "5px" }}
          />
          <span className="text-success" style={{ fontSize: "24px" }}>
            JalViks
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "green" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={{ color: "green" }}>
                Dashboard
              </a>
            </li>
            {user ? (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/survey"
                  style={{ color: "green" }}
                >
                  Survey Form
                </a>
              </li>
            ) : null}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <div className="ms-4 dropdown  " style={{ color: "green" }}>
                <button
                  className="btn dropdown-toggle text-green"
                  type="button"
                  id="dropDownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <figure className="avatar avatar-nav">
                    <img
                      src={
                        user?.avatar
                          ? user?.avatar?.url
                          : "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"
                      }
                      alt="User Avatar"
                      className="rounded-circle"
                    />
                  </figure>
                  <span style={{ color: "green" }}>{user?.name}</span>
                </button>
                <div
                  className="dropdown-menu w-100"
                  aria-labelledby="dropDownMenuButton "
                >
                  <Link className="dropdown-item" to="/admin/dashboard">
                    {" "}
                    Dashboard{" "}
                  </Link>
                  <Link className="dropdown-item" to="/me/profile">
                    {" "}
                    Profile{" "}
                  </Link>
                  <Link
                    className="dropdown-item text-danger"
                    to="/"
                    onClick={logoutHandler}
                  >
                    Logout{" "}
                  </Link>
                </div>
              </div>
            ) : (
              !isLoading && (
                <Link to="/login" className="btn ms-4" id="login_btn">
                  {" "}
                  Login{" "}
                </Link>
              )
            )}
          </ul>
          <form className="d-flex ms-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
