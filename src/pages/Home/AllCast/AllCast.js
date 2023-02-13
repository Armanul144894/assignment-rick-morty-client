import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/Logo1.png";
import "./AllCast.css";

const AllCast = () => {
  const [allCast, setAllCast] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setAllCast(data.results));
  }, []);
  return (
    <div className="container allCast-container mx-auto px-10">
      <div className="grid justify-center">
        <img className="logo" src={logo} alt="" />
      </div>

      <h3 className="cast-title text-2xl text-white mb-5">The Cast</h3>

      <div className="grid cast-cards lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 pb-16">
        {allCast.map((cast) => (
          <Link key={cast.id} to={`/allCast/castDetails/${cast.id}`}>
            <div key={cast.id} className="cast-card p-2">
              <div className="cast-body p-3">
                <img className="character-img w-full" src={cast.image} alt="" />
                <p className="py-3">{cast.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCast;

{
  /* <Row xs={2} sm={3} md={4} lg={5} className="g-3">
        {allCast.map((cast) => (
          <Col>
            <Card className=" bg-dark">
              <Card.Img
                className="p-2 cast-img"
                variant="top"
                src={cast.image}
              />
              <Card.Body>
                <p className="text-white text-start">{cast.name}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */
}
