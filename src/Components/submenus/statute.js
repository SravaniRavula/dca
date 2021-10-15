import React from "react";
import data from "../../temp.json";
import "./stylesheet.css";

function statute() {
  return (
    <div>
      {data.Statue.map((information) => {
        return (
          <section className="container">
            <div className="content">
              <h3>{information.heading}</h3>
              <h5>{information.p}</h5>
              <h5>{information.header}</h5>
              {information.content.map((details) => {
                return (
                  <ul>
                    <a download href={details.link} className="subheader ">
                      {details.description}
                    </a>
                  </ul>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default statute;
