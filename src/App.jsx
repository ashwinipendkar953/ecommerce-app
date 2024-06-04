import Header from "./components/Header";
import bannerImage from "./assets/images/banner.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="bg-body-tertiary">
        <div className="container py-3">
          <div className="d-flex justify-content-around ">
            <Link className="btn btn-dark my-2">
              <h5>Men Clothing</h5>
            </Link>

            <Link className="btn btn-dark my-2">
              <h5>Women Clothing</h5>
            </Link>

            <Link className="btn btn-dark my-2">
              <h5>Kids Clothing</h5>
            </Link>
          </div>
        </div>
        <div className="container ">
          <div className="text-center">
            <Link to="/products">
              <img src={bannerImage} alt="Banner Image" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="container py-5">
          <div className="row g-3">
            <div className="col-md-6 ">
              <div className="p-5 bg-secondary-subtle">
                <div className="row g-3">
                  <div className="col-md-4">
                    <img src="" alt="New Arrivals" className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <h5>Fresh New Styles for the Season 🌟</h5>
                    <p>
                      Check out our latest arrivals and update your wardrobe
                      with the trendiest, most fashionable pieces this season.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Shop New Arrivals
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="p-5 bg-secondary-subtle">
                <div className="row g-3">
                  <div className="col-md-4">
                    <img
                      src=""
                      alt="Monsoon Collection"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5>Embrace the Monsoon with Style 🌧️</h5>
                    <p>
                      Discover our exclusive Monsoon Collection, designed to
                      keep you chic and comfortable in the rain.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Explore Monsoon Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
