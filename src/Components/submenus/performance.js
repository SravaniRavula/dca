import React from "react";
import './stylesheet.css'




function performance() {
  return (
    <div>
      {data.Performance.map((information) => {
        return (
          <section className="container">
           
              <div className="content">
                <h3>{information.heading}</h3>
                <h5>{information.p}</h5>
                <h5>{information.header}</h5>
                <a download href={information.link} className="subheader">
                  {information.description}
                </a>
              </div>
          </section>
        );
      })}
    </div>
  );
}

export default performance;
