import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" href="#">
                <span>nextcafe.ir</span>
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

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      منو
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      درباره ما
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      تماس باما
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <Link className="cart_link position-relative" href="#">
                    <i className="bi bi-cart-fill text-white fs-5"></i>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill">
                      3
                    </span>
                  </Link>
                  <Link href="#" className="btn-auth">
                    ورود
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
