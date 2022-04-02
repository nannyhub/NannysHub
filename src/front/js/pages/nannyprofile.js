import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Nannyprofile = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let pathImg =
    "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  useEffect(() => {
    actions.getsingleNanny(params.id);
  }, []);

  return (
    <>
      {store.nanny.first_name ? (
        <div className="d-flex flex-column m-5">
          <h1 className="text-center">{store.nanny.first_name}</h1>
          <div className="d-flex justify-content-center">
            <img className="image-fluid" src={pathImg} />
            <div className="card p-3 d-flex flex-column">
              <span className="pb-3">
                Full name:{" "}
                {`${store.nanny.first_name} ${store.nanny.last_name}`}
              </span>
              <span className="pb-3">Age: {store.nanny.age}</span>
              <span className="pb-3">Address: {store.nanny.location}</span>
              <span className="pb-3">Skills: {store.nanny.skills} </span>
              <span className="pb-3">
                Years of experience: {store.nanny.experience}{" "}
              </span>
              <span className="pb-3">Price (hourly): {store.nanny.price} </span>
            </div>
          </div>
          <div className=" mt-3 d-flex justify-content-center">
            <Link to="/">
              <span className="btn btn-primary btn-lg" href="#" role="button">
                Back home
              </span>
            </Link>
            <Link className="ms-3" to="/">
              <span className="btn btn-success btn-lg" href="#" role="button">
                Book me!
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column m-5">
          <h1 className="text-center">Couldn't find nanny 🤔</h1>
        </div>
      )}
    </>
  );
};
