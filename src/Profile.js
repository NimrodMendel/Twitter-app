import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Profile.css";

function Profile() {
  const [userName, setUserName] = useState("@TheReactiveMan"); //  Set username hook

  const handleOnChange = (event) => {
    //  set username
    setUserName(event.target.value);
  };

  const handleOnSubmit = (event) => {
    //  Change username in local storage
    event.preventDefault();
    localStorage.setItem("userName", `@${userName}`);
    setUserName("");
  };

  return (
    <div className="profile-form-container mt-5 w-50 d-block justify-content-center">
      <h1 className="page-header m-5 ">Profile page</h1>
      <div className="w-50">
        <Form className="ml-5" onSubmit={handleOnSubmit}>
          <Form.Group controlId="user-name-form">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              className="user-name-box"
              value={userName}
              type="text"
              placeholder=""
              onChange={handleOnChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-end mt-2">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Profile;
