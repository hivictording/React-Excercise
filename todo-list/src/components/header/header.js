import React from "react";

// import AppContext from "../../context";
import { ColorConsumer } from "../../context";

export default () => {
  return (
    <section className="header">
      <div className="container-fluid">
        <div className="row justify-content-around align-items-center">
          <div className="col-4">
            <ColorConsumer>
              {/* <colorContext.Consumer> */}
              {(context) => (
                <h2
                  className="text-center"
                  style={{ background: context.bkColor1 }}
                >
                  Todo List Project
                </h2>
              )}
            </ColorConsumer>
          </div>

          <div className="col-4">
            {/* <colorContext.Consumer> */}
            <ColorConsumer>
              {(context) => (
                <h6
                  className="text-center"
                  style={{ background: context.bkColor2 }}
                >
                  By Victor Ding
                </h6>
              )}
            </ColorConsumer>
          </div>

          {/* Button component for changing color */}
          <div className="col-4">
            {/* <colorContext.Consumer> */}
            <ColorConsumer>
              {(context) => (
                <button
                  className="btn btn-warning text-capitalize"
                  onClick={context.switchColor}
                >
                  switch color
                </button>
              )}
            </ColorConsumer>
          </div>
        </div>
      </div>
    </section>
  );
};
