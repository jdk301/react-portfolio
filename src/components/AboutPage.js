import React from "react";

const AboutPage = () => (
  <section className="about" id="about">
    <div className="section-header">
      <h1 className="title">About</h1>
    </div>

    <div className="about-wrapper">
      <div className="about-item item1">
        <img className="headshot" src="/images/headshot.png" />
      </div>

      <div className="about-item item2">
        <p>
          <b>Hi, I'm Justin &#128171;</b>
          <br />
          I'm a Junior Front End Web Developer and UI/UX Designer with
          experience in delivering end-to-end React applications and websites.
          <br />
          I'm passionate about creating elegant and lasting products through
          AGILE life cycles, a positive mindset, and continuous growth.
          <br />
          <br />
          You can view my resume here:{" "}
          <a href={"/documents/justin_kim.pdf"} target="_blank">
            justin_kim.pdf
          </a>
        </p>
      </div>

      {/* <div className="about-item item3">
        <p>
          You can view my resume here:{" "}
          <a href={"/documents/justin_kim.pdf"} target="_blank">
            justin_kim.pdf
          </a>
        </p>
      </div> */}

      {/* <div className="about-item item2">
        <p>
          <img className="img-desc" src="/images/location.png" />
          Gaithersburg, Maryland
        </p>
        <p>
          <img className="img-desc" src="/images/education.png" />
          University of Maryland Global Campus
        </p>
        <p>
          <img className="img-desc" src="/images/major.png" />
          Computer Science, Front End Development
        </p>
        <p>
          <img className="img-desc" src="/images/work.png" />
          Self Employed
        </p>
        <p>
          <img className="img-desc" src="/images/resume.png" />
          Resume:{" "}
          <a href={"/documents/justin_kim.pdf"} target="_blank">
            justin_kim.pdf
          </a>
        </p>
      </div>

      <div className="about-item item3">
        <div>
          <img className="img-desc" src="/images/html.png" />
          HTML
        </div>
        <div>
          <img className="img-desc" src="/images/css.png" />
          CSS
        </div>
        <div>
          <img className="img-desc" src="/images/js.png" />
          JavaScript
        </div>
        <div>
          <img className="img-desc" src="/images/react.js.png" />
          React.js
        </div>
        <div>
          <img className="img-desc" src="/images/affinity.png" />
          Affinity Designer
        </div>
      </div> 

      <div className="about-item item4">
        <div>
          <img className="img-desc" src="/images/udemy.png" />
          <p>
            The Complete React Developer Course (w/ Hooks and Redux) by Andrew
            Mead
          </p>
          <br />
          <span className="skill">React.js</span>
          <span className="skill">HTML</span>
          <span className="skill">Sass</span>
          <span className="skill">Webpack</span>
          <span className="skill">Jest</span>
          <span className="skill">Enzyme</span>
          <span className="skill">Redux</span>
          <span className="skill">Express</span>
          <span className="skill">Heroku</span>
          <span className="skill">Firebase</span>
        </div>
        <div>
          <p>W3 Front End Developer</p>
          <br />
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
        </div>
        <div>
          <p>U.S. Energy Information Administration</p>
          <br />
          <span className="skill">Python</span>
          <span className="skill">Git</span>
        </div>
        <div>
          <p>Coffee Republic</p>
          <br />
          <span className="skill">Management</span>
          <span className="skill">Business Analysis</span>
          <span className="skill">Training</span>
        </div>
      </div> */}
    </div>
  </section>
);

export default AboutPage;
