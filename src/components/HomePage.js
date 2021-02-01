import React from "react";

const HomePage = () => (
  <section
    className="home"
    id="top"
    style={{
      backgroundImage: `url("/images/coffeebg.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
    }}
  >
    <div className="home-container">
      <h1 className="title">JUSTIN KIM</h1>
      <h2 className="subtitle">web developer. programmer. barista.</h2>
      <i>
        <img src="/images/my-logo.png" width="12%" />
      </i>
    </div>
  </section>
);

export default HomePage;
