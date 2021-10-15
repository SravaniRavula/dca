import React from "react";
import data from "../../temp.json";
import "./stylesheet.css";

function objectives() {
  return (
    <div>
      {data.Objectives.map((information) => {
        return (
          <section className="container">
            <div className="content">
              <h3 className="  ">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.header}</h5>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                          <ul>
                            <li className="m-4">{detail.p}</li>
                          </ul>
                        );
                      })}
                    </section>
                  </>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default objectives;
