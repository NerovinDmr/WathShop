import React from "react";
import { withRouter } from "react-router-dom";
import watch from "../../assets/watch.webp";
import "./main-section.styles.scss";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={watch} alt="studio bag" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
            We produce products that easily move from day to night. From the
            conference room to the fitness studio and everywhere in between ,
            each piece is carefully thought out to provide the perfect balance
            of form and functionality.
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/product/1")}
          >
            best price
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
