import React from "react";
import "./About.css";
import CutePic from "../../assets/SUNADA-WONG_WARREN ROBERT.png";
import { useState } from "react";

function Button(props) {
  return <div className="button" onClick={()=>{props.setButtonText('I want to be a member of the Harvard Computer Society!')}}>{props.buttonText}</div>;
}

export default function AboutScreen() {
  const [buttonText, setButtonText] = useState("Click me")

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <div>
            <img src={CutePic} class="intro-picture"/>
          </div>
        </div>
        <div className="intro-item">
          Hi. My name is Warren Sunada-Wong and I like computer science.
        </div>
        <div>
          <Button buttonText={buttonText} setButtonText={setButtonText}></Button>
        </div>
      </div>
    </div>
  );
}
