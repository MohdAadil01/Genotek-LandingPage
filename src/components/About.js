import React from "react";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img
              src="https://www.genotek.global/hubfs/bwbouwfirmabw.jpg#keepProtocol"
              alt=""
            />
          </div>

          <div className="content">
            <h3>what makes our Joint covers special?</h3>
            <p>
              Our commitment to quality is unwavering. Genotek expansion joint
              covers are crafted with precision and expertise, using the finest
              materials that stand the test of time.
            </p>
            <p>
              Understanding that every project is unique, we offer more than
              off-the-shelf solutions. Genotek believes in the power of
              customization.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
