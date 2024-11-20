import React from "react";
import "../style/header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    if (route == "null") {
      navigate("/");
    } else {
      navigate(`/${route}`);
    }
  };
  return (
    <div className="header">
      <nav className="navbar">
        <div className="container-fluid">
          <div>
            <a className="logo">Scentiments.MNL</a>

            <a className="navbar-brand" onClick={() => handleNavigate("null")}>
              Home
            </a>
            <a className="navbar-brand" onClick={() => handleNavigate("about")}>
              About
            </a>
            <div class="btn-group">
              <button
                className="btn text-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
                onClick={() => handleNavigate("product")}
              >
                Product
              </button>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleNavigate("product1")}
                  >
                    Product 1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleNavigate("product2")}
                  >
                    Product 2
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="navbar-brand"
              onClick={() => handleNavigate("contact")}
            >
              Contact
            </a>
          </div>
          <form class="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
