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
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";

export const SearchPage = () => {
  const baseUrl = "https://www.google.com/maps/embed/v1/place";
  const apiKey = "AIzaSyCyVmgXIL08YhSyk-HvPdo2IFUzzuyQIXg";
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });

  const render = (status) => {
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
    <Container className="bar">
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
              placeholder="Filter by city"
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
              placeholder="Filter by € per hour"
              onChange={(event) => {
                setSearchByInfo({ ...searchByInfo, price: event.target.value });
              }}
            />
          </Col>
          <Col>
            <i class="fa-solid fa-badge-check"></i>
          </Col>
          <Col className="search">
            <input
              id="search-bar-experience"
              type="text"
              placeholder="Filter by Experience"
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
              onClick={() => {
                actions.getNannyApplyFilter(searchByInfo);
              }}
            >
              Test
            </Button>
          </Col>
        </Row>
        <div className="d-flex flex-column w-50 align-items-center">
          <Wrapper apiKey={apiKey} render={render} />
          <Slider
            className="w-75"
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
        {store.nannyList.map((item) => {
          return (
            //add cards for the items. item = Nannys.serialize
            <div>
              <h1>First Name: {item.first_name}</h1>
              <p>Last Name: {item.last_name}</p>
            </div>
          );
        })}
        <div className="d-flex flex-wrap w-50">
          <Paper
            className="d-flex align-items-center p-3 w-50"
            elevation={0}
            variant="outlined"
          >
            <Avatar sx={{ width: 56, height: 56 }}>N</Avatar>
            <div className="ms-4 d-flex flex-column">
              <h5>lorem ipsum</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley...
              </p>
            </div>
          </Paper>
        </div>
      </div>
    </Container>
  );
};
