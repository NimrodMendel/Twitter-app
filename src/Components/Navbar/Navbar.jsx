import "./Navbar.css";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

/**
 * A NAvbar function component
 */
const Navbar = () => {
  return (
    <div className="navbar w-100">
      <ul className="navbar-link-list d-flex justify-content-start">
        <Row className="mt-2">
          <Link className="page-link mr-5" to="/">
            Home
          </Link>
          <Link className="page-link" to="/profile">
            Profile
          </Link>
        </Row>
      </ul>
    </div>
  );
};
export default Navbar;
