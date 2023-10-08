import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({colors}) {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">Welcome to the best ever color factory.</h1>
        <h1>
          <Link to="/colors/new">Add your own color</Link>
        </h1>
      </header>
      <div className="ColorList-intro">
        <p>Select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;
