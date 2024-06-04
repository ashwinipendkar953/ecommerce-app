import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand col-lg-3" to="/">
            <span className="text-body-tertiary fw-bold">MyShoppingSite</span>
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
            className="collapse navbar-collapse d-lg-flex justify-content-around align-items-center"
            id="navbarNav"
          >
            <div className="col-lg-6 py-2">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>

            <div className="d-lg-flex col-lg-3 justify-content-between align-items-center">
              <div>
                <Link className="btn btn-secondary rounded-0" to="/">
                  Login
                </Link>
              </div>

              <div>
                <Link className="text-dark">
                  <i className="bi bi-heart" style={{ fontSize: "25px" }}></i>
                </Link>
              </div>

              <div>
                <Link className="text-dark text-decoration-none">
                  <i className="bi bi-cart" style={{ fontSize: "25px" }}></i>
                  <span className="fw-bold px-2">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
