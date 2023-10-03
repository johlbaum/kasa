import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import ApartmentDescription from "./pages/ApartmentDescription";
import { ActiveNavItemProvider } from "./utils/context";

import styles from "./styles/global.module.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <div className={styles.mainContainer}>
        <ActiveNavItemProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/apartment/:apartmentId"
                element={<ApartmentDescription />}
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </ActiveNavItemProvider>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
