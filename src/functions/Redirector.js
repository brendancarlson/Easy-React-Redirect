import { createBrowserHistory } from "history";

// Import history and set it to redirect and refresh the page upon location change
const history = createBrowserHistory({
  forceRefresh: true
});

// Listen for changes to the current location.
history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});

export default history;
