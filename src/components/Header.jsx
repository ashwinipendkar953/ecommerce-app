import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand col-lg-2" to="/">
            <span className="text-pink fw-bold fs-4">EcomEase</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex justify-content-between align-items-center"
            id="navbarNav"
          >
            <div className="col-lg-7 py-2">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
            </div>

            <div className="d-lg-flex col-md-3 justify-content-between align-items-center">
              <Link className="btn btn-pink fw-semibold" to="/">
                Login
              </Link>

              <Link
                className="text-dark position-relative"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-heart"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                </svg>
                <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-pink">
                  0
                </span>
              </Link>

              <Link className=" text-dark position-relative text-decoration-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-cart3"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                </svg>
                <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-pink">
                  0
                </span>
                <span
                  className="text-hover-pink fw-semibold "
                  style={{ paddingLeft: "4px" }}
                >
                  Cart
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
