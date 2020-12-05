import axios from "axios";

const URL =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

/**
 * A function for fetching data from the server
 * @param {function} callback
 */
export function getData() {
  return axios.get(URL);
}

/**
 * A function that sends a tweet to the server. The function calls the update function
 * @param {Object} tweet
 * @param {function} callback
 */
export function sendData(tweet, callback) {
  return axios.post(URL, tweet).then(() => {
    callback();
  });
}
