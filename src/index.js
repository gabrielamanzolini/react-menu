import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>
        <ul className="topBar">
          <li>
            <a href="https://www.youtube.com/watch?v=bwmSjveL3Lc">Click</a>
            <ul className="menuDropdown">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=Amq-qlqbjYA">Clack</a>
            <ul className="menuDropdown">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=IHNzOHi8sJs">Barabim</a>
            <ul className="menuDropdown">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=IHNzOHi8sJs">Barabum</a>
            <ul className="menuDropdown">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </li>
          <li className="menuDropdown minicart">
            <a>MC</a>
            <ul className="cart-dropdown">
              <ul className="cart-list">
                <li className="row">
                  <div className="col col-0">
                    <div className="img" />
                    <div className="productName">
                      <a>Square Up - BlackPink </a>
                    </div>
                  </div>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("menu");
ReactDOM.render(<App />, rootElement);
