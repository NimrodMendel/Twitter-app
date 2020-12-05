import React from "react";
import { Container } from "react-bootstrap";
import TweetForm from "./Components/TweetForm/TweetForm";
import TweetsList from "./Components/TweetsList/TweetsList";
import { getData, sendData } from "./lib/TweetsAPI";
import { appContext } from "./appContext";
import Loader from "react-loader-spinner";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      showSpinner: false,
      handleOnAddTweet: (newTweet) => this.handleOnAddTweet(newTweet),
    };
  }

  /**
   * A function that handles tweet sending.
   * The function makes use of the TweetsAPI for posting the tweets.
   * @param {Object} newTweet
   */
  handleOnAddTweet(newTweet) {
    try {
      this.setState({ showSpinner: true });
      sendData(newTweet, () => {
        this.setState((state) => {
          return { tweets: [newTweet, ...state.tweets] };
        });
      });
      this.setState({ showSpinner: false });
    } catch (error) {
      window.alert(error);
      this.setState({ tweets: [] });
    }
  }

  componentDidMount() {
    //  Check for updates every 20 seconds
    this.setState({ showSpinner: true });
    setInterval(() => {
      this.fetchTweets().then();
    }, 20000);
  }

  async fetchTweets() {
    const tweetsFromServer = await getData();
    const tweets = tweetsFromServer.data.tweets;
    this.setState({ tweets, showSpinner: false });
  }

  render() {
    const { showSpinner } = this.state;

    return (
      <appContext.Provider value={this.state}>
        <div className="d-inline w-75 justify-content-center">
          <Container fluid className="mt-5">
            <TweetForm />
            {showSpinner && (
              <div className="d-flex mt-5 justify-content-center">
                <Loader
                  type="Circles"
                  color="#FFFFFF"
                  height={60}
                  width={60}
                  timeout={4000}
                />
              </div>
            )}
          </Container>
          <TweetsList />
        </div>
      </appContext.Provider>
    );
  }
}
export default Home;
