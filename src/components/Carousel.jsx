import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";

const carouselImages = [banner1, banner2, banner3, banner4];

const Carousel = () => {
  return (
    <div className="container">
      <div className="text-center">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {carouselImages.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Carousel Image ${index}`}
                  style={{ height: "500px" }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
