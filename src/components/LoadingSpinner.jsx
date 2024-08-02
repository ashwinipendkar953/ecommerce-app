import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ size = "sm", message = "Loading..." }) => {
  return (
    <div className="d-flex my-2 justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" size={size} role="status">
        <span className="sr-only"></span>
      </Spinner>
      <span className="ml-2 mx-2">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
