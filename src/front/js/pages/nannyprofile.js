import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Nannyprofile = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let pathImg =
    "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  const [nanny, setNanny] = useState({ first_name: "Vitu" });

  useEffect(() => {
    actions.getsingleNanny(params.id);
    // TODO - Line above is broken for some reason
    setNanny(actions.getLocalNanny(params.id));
  }, []);
  return (
    <>
      <div>
        <div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
          <div className="right-side d-inline-block">
            <h1 className="text-center warning" id="name">
              {nanny.first_name}
            </h1>
            <h6
              className="description mx-5 text-center text-monospace"
              id="fakeText"
            >
              {" "}
              Lucas origin ipsum dolor sit amet maul grievous mustafar wampa
              organa yavin organa fett antilles tatooine. Biggs amidala kenobi
              antilles moff yavin solo darth greedo. Wookiee wicket darth jinn
              c-3p0. Bespin jinn k-3po coruscant darth baba calamari ahsoka.
              Vader yoda kamino moff lobot r2-d2 organa skywalker baba. Gonk
              c-3po yavin moff moff skywalker. Jinn darth binks hutt coruscant
              dantooine moff binks. Moff darth darth dantooine tatooine moff
              skywalker. Skywalker calrissian organa moff. Mothma mace chewbacca
              maul skywalker anakin thrawn ahsoka antilles.
            </h6>
          </div>
        </div>
        <div className="divider bg-red" />
        {nanny ? (
          <div className="row d-flex m-3">
            <div className="col-2 text-warning" id="nannys">
              <strong>
                <u>Name</u>
              </strong>
              <br />
              <br />
              {nanny.first_name}
            </div>
            <div className="col-2 text-warning" id="nannys">
              <strong>
                <u>Last Name</u>
              </strong>
              <br />
              <br />
              {nanny.last_name}{" "}
            </div>
            <div className="col-2 text-warning" id="nannys">
              <strong>
                <u>Age</u>
              </strong>
              <br />
              <br />
              {nanny.age}{" "}
            </div>
            <div className="col-2 text-warning" id="nannys">
              <strong>
                <u>Skills</u>
              </strong>
              <br />
              <br />
              {nanny.skills}{" "}
            </div>
            <div className="col-2 text-warning" id="nannys">
              <strong>
                <u>Education and experience</u>
              </strong>
              <br />
              <br />
              {nanny.experience}{" "}
            </div>
            <div className="col-2 text-warning" id="nannys">
              <strong>
                <u>Location</u>
              </strong>
              <br />
              <br />
              {nanny.location}{" "}
            </div>
            <div className="col-2 text-warning" id="nannys">
              <strong>
                <u>Price per h.</u>
              </strong>
              <br />
              <br />
              {nanny.price}{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="d-flex justify-content-center">
        <img className="image-fluid" src={pathImg} />{" "}
      </div>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </>
  );
};
