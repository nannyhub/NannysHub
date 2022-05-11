import React, { useEffect, useState, useContext } from "react";
import { Container, Col, Spinner, Row } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../../styles/searchpage.css";
import Map from "../component/map";
import NannyCard from "../component/nannyCard";

export const SearchPage = () => {
  const baseUrl = "https://www.google.com/maps/embed/v1/place";
  const apiKey = "AIzaSyCyVmgXIL08YhSyk-HvPdo2IFUzzuyQIXg";
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });
  const [searchByInfo, setSearchByInfo] = useState({});
  const { store, actions } = useContext(Context);

  const renderLocation = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner animation="border" />;
      case Status.FAILURE:
        return <h1>Error loading Map!</h1>;
      case Status.SUCCESS:
        return <Map nannies={store.nannies} center={location} zoom={4} />;
    }
  };

  useEffect(() => {
    actions.getNannies();
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    actions.getNannyApplyFilter(searchByInfo);
  }, [searchByInfo]);

  return (
    <>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center my-3 mx-5">
          <Row className="mb-3">
            <Col>
              <i className="fas fa-map-marker-alt"></i>
            </Col>
            <Col className="search">
              <input
                id="search-bar-city"
                type="text"
                placeholder="Location"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    location: event.target.value,
                  });
                }}
              />
            </Col>
            <Col>
              <i className="fas fa-euro-sign"></i>
            </Col>
            <Col className="search">
              <input
                id="search-bar-amount"
                type="number"
                min="0"
                step="5"
                placeholder="€/Hour (Maximum)"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    price: event.target.value,
                  });
                }}
              />
            </Col>
            <Col>
              <i className="fa-solid fa-check"></i>
            </Col>
            <Col className="search">
              <input
                id="search-bar-experience"
                type="number"
                min="0"
                placeholder="Experience (In Years)"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    experience: event.target.value,
                  });
                }}
              />
            </Col>
          </Row>
          <div className="d-flex flex-column w-50 align-items-center">
            <Wrapper apiKey={apiKey} render={renderLocation} />
          </div>
        </div>
      </Container>
      <div className="d-flex flex-wrap w-75 m-auto">
        {store.nannies.map((item, index) => (
          <NannyCard item={item} key={index} />
        ))}
      </div>
      <br></br>
    </>
  );
};
