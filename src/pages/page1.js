import React from "react";

// Import Redirector function
import history from "../functions/Redirector";


// Configure the function and set the location it will redirect to
function Page2({ goToPage2 }) {
  goToPage2 = () => {
    history.push("/page2");
  };

  // The function can either be used on an onsubmit or onclick

  return (
    <div className="App">
      <h1>React Redirector</h1>
      <h2>This is page 1, click the button below to go to page 2</h2>
      <form onSubmit={goToPage2}>
        <button className="btn primary-btn">Click Here</button>
      </form>
    </div>
  );
}

export default Page2;
