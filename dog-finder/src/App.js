import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

import cooper from "./images/cooper.jpg";
import lolly from "./images/lolly.jpg";
import saber from "./images/saber.jpg";
import rita from "./images/rita.jpg";


function App({dogs}) {
  return (
    <div>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <div className="container">
          <Routes dogs={dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export const dogs = [
  {
    name: "Saber",
    age: 5,
    src: saber,
    facts: [
      "Saber wishes he was a husky.",
      "Saber hates kids.",
      "Saber likes pickles!"
    ]
  },
  {
    name: "Cooper",
    age: 3,
    src: cooper,
    facts: [
      "Cooper is a gentleman.",
      "Cooper hates rain.",
      "Cooper loves blueberries."
    ]
  },
  {
    name: "Rita",
    age: 4,
    src: rita,
    facts: [
      "Rita loves all humans.",
      "Rita demolishes all snacks.",
      "Rita hates the rain."
    ]
  },
  {
    name: "Lolly",
    age: 4,
    src: lolly,
    facts: [
      "Lolly is really stupid.",
      "Lolly does not like walks.",
      "Lolly hates Saber"
    ]
  }
];

App.defaultProps = { dogs };

export default App;
