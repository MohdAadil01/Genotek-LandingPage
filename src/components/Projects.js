import React from "react";
import { projects } from "../Data";
const Projects = () => {
  return (
    <>
      <section class="projects" id="projects">
        <h1 class="heading">
          our <span>projects</span>
        </h1>

        <div class="box-container">
          {projects.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  Ceasar's Palace Bluewater Island
                </a>
                <span>Dubai, UAE</span>
                <p>
                  This project requires wide range of product for different
                  condition. The Design Team of Genotek work closely with
                  Brookfield Multiplex in order properly select the right
                  product the meets the aesthetic requirements and produce
                  maximum functionability.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
