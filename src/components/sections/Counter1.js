import React from "react";
import CounterNumber from "../elements/CounterNumber";

export default function Counter1() {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/11.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={50} />
              </span>
              +
            </h2>
            <p>Years of combined experience</p>
          </div>
        </div>
      </div>
    
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/13.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={4} />
              </span>
              +
            </h2>
            <p >Types of specialized <br/>inks</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/12.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={10} />
              </span>
              +
            </h2>
            <p>Substrates</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/14.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={100} />
              </span>
              %
            </h2>
            <p>Customization</p>
          </div>
        </div>
      </div>
    </div>
  );
}
