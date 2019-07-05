import React from "react";
import history from "../functions/Redirector";

function Page2({ goToPage2 }) {
  goToPage2 = () => {
    history.push("/page2");
  };

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
