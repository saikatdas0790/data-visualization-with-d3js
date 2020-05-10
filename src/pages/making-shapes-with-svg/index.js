import React from "react";
import { Helmet } from "react-helmet";
import styles from "./index.module.css";

const MakingShapesWithSVG = () => {
  return (
    <>
      <Helmet>
        <title>Shapes with SVG and CSS</title>
      </Helmet>
      <main>
        <svg width="960" height="500">
          <g transform="scale(1.5)">
            <circle cx="50" cy="50" r="40"></circle>
            <rect x="100" y="25" width="50" height="50"></rect>

            <circle cx="50" cy="150" r="40" fill="red"></circle>
            <rect x="100" y="125" width="50" height="50" fill="#83cc2a"></rect>

            <g transform="translate(0, 200)" fill="#adf6ff" stroke="black">
              <circle cx="50" cy="50" r="40" strokeWidth="5"></circle>
              <rect x="100" y="25" width="50" height="50"></rect>
            </g>

            <g className={styles.lines} transform="translate(50, 0)">
              <line x1="200" y1="20" x2="300" y2="280"></line>
              <path fill="none" d="M300 280 L350 200 L400 250 L450 230"></path>
            </g>
          </g>
        </svg>
      </main>
    </>
  );
};

export default MakingShapesWithSVG;
