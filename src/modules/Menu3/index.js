import React from "react";
import data from "../../temp.json";


function RtiAct() {
  return (
    <>
      <div>
        {data.Rti.map((information) => {
          return (
            <section className="container">
              <div className="row">
                <section className="">
                  <h3 className="m-2 centered">{information.heading}</h3>
                  <h4 className="m-2">{information.header}</h4>
                  <p className="m-2">{information.paragraph}</p>
                </section>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default RtiAct;