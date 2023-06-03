import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
  const [cardContent, setCardContent] = useState([
    {
      title: "First card", image: "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_640.jpg",
      description: "This is a puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam.",
      buttonText: "First button"
    },
    {
      title: "Second card", image: "https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_640.jpg",
      description: "This is a puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam.",
      buttonText: "Second button"
    },
    {
      title: "Third card", image: "https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_640.jpg",
      description: "This is a puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam.",
      buttonText: "Third button"
    },
    {
      title: "Fourth card", image: "https://cdn.pixabay.com/photo/2019/05/28/05/47/puppy-4234435_640.jpg",
      description: "This is a puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam.",
      buttonText: "Fourth button"
    },
  ]);


  return (
    <div className="container-fluid m-0 p-0">
      <div className="row d-flex justify-content-center m-0">
        <div className="col-12 p-0">
          <Navbar />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-10">
            <Jumbotron />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              {cardContent.map((card) => {
                return <Card {...card} />
              })}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;