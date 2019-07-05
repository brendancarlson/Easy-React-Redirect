import React from "react";
import history from "../functions/Redirector";

function Page2({ goToPage1 }) {
  goToPage1 = () => {
    history.push("/");
  };

  return (
    <div className="App">
      <h1>React Redirector</h1>
      <h2>This is page 2, click the button below to go back to page 1</h2>
      <form onSubmit={goToPage1}>
        <button className="btn primary-btn">Click Here</button>
      </form>
    </div>
  );
}

export default Page2;
