import React, { useEffect, useState, useContext } from "react";
import {
  FormControl,
  Container,
  Button,
  Col,
  InputGroup,
  Spinner,
  Row,
} from "react-bootstrap";
import { Context } from "../store/appContext";
import Slider from "@mui/material/Slider";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../../styles/searchpage.css";
import Map from "../component/map";
import NannyCard from "../component/nannyCard";

export const SearchPage = () => {
  const baseUrl = "https://www.google.com/maps/embed/v1/place";
  const apiKey = "AIzaSyCyVmgXIL08YhSyk-HvPdo2IFUzzuyQIXg";
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });

  const renderLocation = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner animation="border" />;
      case Status.FAILURE:
        return <h1>Error loading Map!</h1>;
      case Status.SUCCESS:
        return <Map center={location} zoom={4} />;
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

  const [searchByInfo, setSearchByInfo] = useState({});
  const { store, actions } = useContext(Context);

  return (
    <>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center my-3 mx-5">
          <InputGroup className="mb-3 w-50">
            <Button variant="success" id="button-addon1">
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Row>
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
                type="text"
                placeholder="€ per Hour(max.value)"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    price: event.target.value,
                  });
                }}
              />
            </Col>
            <Col>
              <i className="fa-solid fa-badge-check"></i>
            </Col>
            <Col className="search">
              <input
                id="search-bar-experience"
                type="text"
                placeholder="Experience(min.years)"
                onChange={(event) => {
                  setSearchByInfo({
                    ...searchByInfo,
                    experience: event.target.value,
                  });
                }}
              />
            </Col>
            <Col>
              <Button
                variant="light"
                id="ba"
                onClick={() => {
                  actions.getNannyApplyFilter(searchByInfo);
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
          <div className="d-flex flex-column w-50 align-items-center">
            <Wrapper apiKey={apiKey} render={renderLocation} />
          </div>
        </div>
      </Container>
      <div className="d-flex flex-wrap">
        {store.nannies.map((item, index) => (
          <NannyCard item={item} key={index} />
        ))}
      </div>
      <br></br>
    </>
  );
};
