import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Error from "./Components/Error";

import styles from "./styles/global.module.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className={styles.mainContainer}>
        <Header />
        <Banner />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
