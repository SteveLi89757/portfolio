import React from "react";
import "./CircularProgressBar.css";

export default function ProgressBar({ radius, strokeWidth, progress }) {
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  // Calculate the dash offset to represent the progress
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container">
      <svg className="circular-progress" width={radius * 2} height={radius * 2}>
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
        </defs>
        <circle
          className="background"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          stroke="url(#progressGradient)"
        />
        <text
          x="50%" // Center horizontally
          y="50%" // Center vertically
          textAnchor="middle" // Center the text
          dominantBaseline="middle" // Center the text vertically
          fontWeight="bold"
          fontFamily="'Centra', sans-serif"
          fontSize="70" // Adjust the font size as needed
          fill="#FFF" // Text color
        >
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
}
