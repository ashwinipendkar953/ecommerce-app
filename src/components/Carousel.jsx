const carouselImages = [
  "https://images.template.net/108395/new-arrival-fashion-banner-template-edit-online.jpg",
  "https://images.template.net/108444/free-modern-fashion-banner-edit-online.jpg",
  "https://images.template.net/108266/free-fashion-digital-marketing-banner-edit-online.jpg",
  "https://images.template.net/178234/fashion-facebook-ad-banner-template-edit-online.jpg",
  "https://images.template.net/220707/summer-fashion-banner-template-edit-online.jpg",
  "https://images.template.net/227797/winter-fashion-banner-edit-online.jpg",
];

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
                data-bs-interval="5000"
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100 img-fluid "
                  alt={`Carousel Image ${index}`}
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
