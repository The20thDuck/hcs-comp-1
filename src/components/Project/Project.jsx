import React from "react";
import "./Project.css";

export default function Project(props) {
  return <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>;
}
