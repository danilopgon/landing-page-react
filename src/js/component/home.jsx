import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row d-flex">
        <div className="col-12">
          <Navbar />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-8">
            <Jumbotron />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
