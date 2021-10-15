import React from "react";
import data from "../../../temp.json";



function index() {
  return (
    <>
      {data.BannedDrugs.map((information) => {
        return (
          <section className="container">
            <div className="content">
            <h3 className="  m-3">{information.heading}</h3>
            <p className="m-4">{information.header}</p>

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
    </>
  );
}

export default index;
