import React, { useRef, useEffect, useState } from "react";
import "./projects.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Parallax, Background } from "react-parallax";
import { Projects } from "./projects";
import { ListOfProjects } from "./listOfProjects";

import storytime from "../assets/storytime.png";

export function StartPage() {
  const myRef = useRef<HTMLDivElement>(null);
  const onClick = () => window.scrollTo(0, myRef.current!.offsetTop);

  const [sideContentIsVisible, setSideContentIsVisible] = useState(false);

  useEffect(() => {
    function myScrollFunc() {
      setSideContentIsVisible(window.scrollY > window.innerHeight / 2);
    }

    window.addEventListener("scroll", myScrollFunc);
    return () => window.removeEventListener("scroll", myScrollFunc);
  }, []);

  return (
    <>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="startImage" id="startImage">
          <div className="startText">
            <h1>Lina Andersson</h1>
            <h4>Frontend Developer and UX Designer</h4>
          </div>
          <div className="downArrow">
            <div className="arrow" onClick={onClick}></div>
          </div>
        </div>
      </Link>

      <div className="projects" ref={myRef} id="projects">
        <Projects />
      </div>

      <div className="footer">
        <a href="https://www.linkedin.com/in/lina-andersson-52348898/">
          <FontAwesomeIcon icon={faLinkedin as any} size={"2x"} />
        </a>
      </div>
    </>
  );
}
