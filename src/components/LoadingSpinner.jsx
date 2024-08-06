import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="d-flex my-5 justify-content-center align-items-center">
      <Spinner animation="border" variant="danger" size="md" role="status">
        <span className="sr-only"></span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
