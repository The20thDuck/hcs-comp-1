import React from "react";
import Project from "../../components/Project/Project.jsx";
import { useState } from "react";

const projects = 
[{title:"Project 1", description:"This was my first project"},
{title:"Project 2", description:"This was my second project"},
{title:"Project 3", description:"This was my third project"},
{title:"Project 4", description:"This was my fourth project"}];

function Button(props) {
  return <div className="button" onClick={() => {props.setIndex((props.index+props.dir+projects.length)%projects.length)}}>{props.buttonText}</div>;
}

export default function ProjectsScreen() {
  const [index, setIndex] = useState(0);

  return (
    <div className="screen-background">
      <Button buttonText="Previous" index={index} setIndex={setIndex} dir={-1}></Button>
      <Project title={projects[index].title} description={projects[index].description}></Project>
      <Button buttonText="Next" index={index} setIndex={setIndex} dir={1}></Button>
    </div>
  );
}
