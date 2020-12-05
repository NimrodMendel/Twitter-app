import Tweet from "../Tweet/Tweet";
import { Container } from "react-bootstrap";
import { appContext } from "../../../src/appContext";
import { v4 as uuidv4 } from "uuid";

function TweetsList() {
  return (
    <appContext.Consumer>
      {({ tweets }) => (
        <Container fluid className="d-flex mt-5 justify-content-center">
          <div className="w-50">
            {tweets.map((tweet) => (
              <Tweet
                key={uuidv4()}
                content={tweet.content}
                username={tweet.userName}
                date={tweet.date}
              ></Tweet>
            ))}
          </div>
        </Container>
      )}
    </appContext.Consumer>
  );
}

export default TweetsList;
