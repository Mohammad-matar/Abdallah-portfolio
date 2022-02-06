import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const CircularProgress = ({skill, size, strokewidth, percentage, color}) => {

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokewidth)/2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) /100;

  return(
    <div className="skill-item">
      <svg width={size} height={size} viewBox={viewBox}>
      <circle 
        fill="none"
        stroke="transparent"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokewidth}px`}
      />
      <circle 
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokewidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        style={{transition: 'all 1s'}}
      />
      <text
      fill="#ccc"
      fontSize="32px"
      x="50%"
      y="50%"
      dy="10px"
      textAnchor="middle"
      >
        {`${skill}`}
      </text>

      </svg>
      <p className="skill-percentage">{percentage} %</p>
    </div>
    
  )
}



class Skills extends Component {
  render() {
    return (
      <div className="main-container">
        <Sidebar />
        <div className="container">
          <h1>Skills</h1>
          <div className="skills-circles">
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
            <CircularProgress skill="Html" size={100} strokewidth={5} percentage={50} color="#ccc" />
          </div>
        </div>      
      </div>
    );
  }
}

export default Skills;
