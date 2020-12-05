import React from "react";
import { Button, Container, Form, Row, Alert } from "react-bootstrap";
import "./TweetForm.css";
import { appContext } from "../../appContext";

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      userName: localStorage.getItem("userName"), //  Always get the most updated username from localStorage
      date: "",
    };
  }

  /**
   * The function creates a new tweet object and sends it to App.js
   * @param {event} event
   */
  onHandleTweet(event, handleOnAddTweet) {
    event.preventDefault();
    const newTweet = {
      content: this.state.content,
      userName: this.state.userName,
      date: new Date().toISOString(),
    };
    handleOnAddTweet(newTweet);
    this.setState({ content: "" });
  }

  /**
   * Event handler for text-area
   * @param {event} event
   */
  onHandleTweetTextChange(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    const content = this.state.content;
    return (
      <appContext.Consumer>
        {({ handleOnAddTweet }) => (
          <Container fluid className="form-container w-50 pb-3 px-4">
            <Row className="justify-content-center">
              <Form
                className="w-100"
                onSubmit={(event) =>
                  this.onHandleTweet(event, handleOnAddTweet)
                }
              >
                <Form.Group controlId="tweet-text-area">
                  <Form.Control
                    value={content}
                    className="tweet-form h-25 mt-3"
                    as="textarea"
                    rows={6}
                    placeholder="What's on your mind..."
                    onChange={(event) => this.onHandleTweetTextChange(event)}
                  />
                </Form.Group>
                <div className="d-flex h-75 justify-content-end">
                  <Alert
                    variant="danger"
                    className="mt-3 ml-4   h-25"
                    show={content.length > 140}
                  >
                    Tweet cannot contain more than 140 characters
                  </Alert>
                  <Button
                    className="mr-4 ml-5 h-25 "
                    variant="primary"
                    type="submit"
                    disabled={content.length > 140 || content.length === 0}
                  >
                    Tweet
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        )}
      </appContext.Consumer>
    );
  }
}
export default TweetForm;
