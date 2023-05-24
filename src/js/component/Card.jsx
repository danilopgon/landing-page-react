import React from "react";


const Card = () => {
	return (
    <div className="col-3 card-deck">
    <div className="card" >
    <img src="https://picsum.photos/500/325" className="card-img-top" alt=" "/>
    <div className="card-body">
      <h5 className="card-title  text-center">Card title</h5>
      <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod,
        similique omnis ab excepturi ullam.</p>
      <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
  </div> 
  </div>);
};

export default Card;