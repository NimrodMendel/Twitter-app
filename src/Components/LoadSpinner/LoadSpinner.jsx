import Spinner from "react-bootstrap/Spinner";
const LoadSpinner = () => {
  return (
    <Spinner animation="border" role="status" variant="info">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default LoadSpinner;
