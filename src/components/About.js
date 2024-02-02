import React from "react";
import { render } from "react-dom";
import Links from "./Links"

function About({ links, bio }) {

  const renderBio = bio ? <p>{bio}</p> : null
  const { github, linkedin } = links


  return (
    <div id="about">
      <h2>About Me</h2>
      { renderBio }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {github} linkedin={linkedin} />
    </div>
  );
}

export default About;
