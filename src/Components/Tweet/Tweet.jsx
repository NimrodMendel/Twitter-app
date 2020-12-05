import { Row, Container } from "react-bootstrap";
import "../Tweet/Tweet.css";

function Tweet(props) {
  const content = props.content;
  const username = props.username;
  const date = props.date;

  return (
    <Container fluid className="tweet-container mb-5 px-4 py-2">
      <Row className="justify-content-between d-flex">
        <div>
          <span>
            <em>
              <strong>{username}</strong>
            </em>
          </span>
        </div>
        <div>{date}</div>
      </Row>
      <Row className="tweet-text mt-3">{content}</Row>
    </Container>
  );
}
export default Tweet;
