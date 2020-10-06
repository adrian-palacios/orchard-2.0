import React from "react";

function Steve() {
  return (
    <div className="col-6">
      <div className="card card-about">
        <img
          className="card-img-top"
          src={require("./banana.jpg")}
          alt="steve"
        />
        <div className="card-body">
          <h5 className="card-title">Steve!</h5>
          <p className="card-text">
            Steve worked a ton on the back end of this project. He also likes
            bananas!
          </p>
          <a href="https://github.com/Steve-Munoz" className="btn btn-primary">
            Steve's Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Steve;
