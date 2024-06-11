import Header from "./components/Header";
import bannerImage from "./assets/images/banner.jpg";
import { Link } from "react-router-dom";
import CategoryCardView from "./components/CategoryCardView";

function App() {
  return (
    <>
      <Header />
      <main className="bg-body-tertiary">
        <CategoryCardView />
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
              <div className="p-4 bg-secondary-subtle">
                <div className="row g-3">
                  <div className="col-md-4">
                    <img
                      src="https://img.freepik.com/free-photo/woman-wearing-high-heels-stocking_23-2150261096.jpg?t=st=1718105552~exp=1718109152~hmac=877f6351f1bd0f4ef66d178c2c418196c86bcdd681e32c0d2e973b625d4d758b&w=360"
                      alt="New Arrivals"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5>Fresh New Styles for the Season 🌟</h5>
                    <p>
                      Check out our latest arrivals and update your wardrobe
                      with the trendiest, most fashionable pieces this season.
                    </p>
                    <a href="/products" className="btn btn-dark">
                      Shop New Arrivals
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="p-4 bg-secondary-subtle">
                <div className="row g-3">
                  <div className="col-md-4">
                    <img
                      src="https://img.freepik.com/free-photo/young-beautiful-woman-with-umbrella_155003-11033.jpg?t=st=1718105784~exp=1718109384~hmac=a447e93d93d27e0ef14172ee993d7798c829b3078da2b533909468141f1d044b&w=360"
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
                    <a href="/products" className="btn btn-dark">
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
