import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return <p className="timeline-item" onClick={()=>{props.setActiveTitle(props.title)}}>
    {props.title}
  </p>;
}

export default function ExperienceScreen() {
const [activeTitle, setActiveTitle] = React.useState('');

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem title="Camp Counselor" description="Helped kids in camp." setActiveTitle={setActiveTitle}></TimeLineItem>
          <TimeLineItem title="SPARK Volunteer" description="Volunteered with the food bank" setActiveTitle={setActiveTitle} ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
        </div>
      </div>
    </div>
  );
}
