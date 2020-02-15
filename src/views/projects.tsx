import React, { useRef, useEffect, useState } from "react";
import "./projects.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Parallax, Background } from "react-parallax";
import { ListOfProjects } from "./listOfProjects";

import storytime from "../assets/storytime.png";

export function Projects() {
  return (
    <>
      {ListOfProjects.map(project => {
        return (
          <div className="projectMain">
            <div className="parallaxContainer">
              <Parallax strength={300} bgImage={project.image}></Parallax>
            </div>

            <div className="projectContainer">
              <div className="projectDescription">
                <h2>{project.title}</h2>
                <h6>{project.subTitle}</h6>
                <p>{project.description}</p>
              </div>

              <div className="projectDescription projectTechniquesContainer">
                {project.frameworks.map(framework => {
                  return (
                    <div className="projectTechniques">
                      <FontAwesomeIcon icon={faCheck} />
                      <p> {framework}</p>
                    </div>
                  );
                })}
              </div>
              <div className="projectDescription projectTechniquesContainer">
                {project.websiteLink && (
                  <a href={project.websiteLink}>
                    <button>Go to Website</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
