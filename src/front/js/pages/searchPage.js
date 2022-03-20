import React, {useEffect, useState} from "react";
import {FormControl, Button, InputGroup, Spinner} from "react-bootstrap";
import Slider from '@mui/material/Slider';
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import "../../styles/searchpage.css";
import Map from "../component/map";
import Paper from '@mui/material/Paper';
import {Avatar} from "@mui/material";

export const SearchPage = () => {
    const baseUrl = "https://www.google.com/maps/embed/v1/place";
    const apiKey = "AIzaSyCyVmgXIL08YhSyk-HvPdo2IFUzzuyQIXg";
    const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });

    const render = (status) => {
        switch (status) {
            case Status.LOADING:
                return <Spinner animation="border"/>;
            case Status.FAILURE:
                return <h1>Error loading Map!</h1>;
            case Status.SUCCESS:
                return <Map center={location} zoom={4} />;
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({lat: position.coords.latitude, lng: position.coords.longitude});
        });
        }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center my-3 mx-5">
            <InputGroup className="mb-3 w-50">
                <Button variant="success" id="button-addon1">
                    <i className="fa-solid fa-magnifying-glass"/>
                </Button>
                <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <div className="d-flex flex-column w-50 align-items-center">
                <Wrapper apiKey={apiKey} render={render} />
                <Slider className="w-75"  defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>
            </div>
            <div className="d-flex flex-wrap w-50">
                <Paper className="d-flex align-items-center p-3 w-50" elevation={0} variant="outlined">
                    <Avatar sx={{ width: 56, height: 56 }} >N</Avatar>
                    <div className="ms-4 d-flex flex-column">
                        <h5>lorem ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                    </div>
                </Paper>
                <Paper className="d-flex align-items-center p-3 w-50" elevation={0} variant="outlined">
                    <Avatar sx={{ width: 56, height: 56 }} >N</Avatar>
                    <div className="ms-4 d-flex flex-column">
                        <h5>lorem ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                    </div>
                </Paper>
                <Paper className="d-flex align-items-center p-3 w-50" elevation={0} variant="outlined">
                    <Avatar sx={{ width: 56, height: 56 }} >N</Avatar>
                    <div className="ms-4 d-flex flex-column">
                        <h5>lorem ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                    </div>
                </Paper>
                <Paper className="d-flex align-items-center p-3 w-50" elevation={0} variant="outlined">
                    <Avatar sx={{ width: 56, height: 56 }} >N</Avatar>
                    <div className="ms-4 d-flex flex-column">
                        <h5>lorem ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                    </div>
                </Paper>
                <Paper className="d-flex align-items-center p-3 w-50" elevation={0} variant="outlined">
                    <Avatar sx={{ width: 56, height: 56 }} >N</Avatar>
                    <div className="ms-4 d-flex flex-column">
                        <h5>lorem ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                    </div>
                </Paper>
                <Paper className="d-flex align-items-center p-3 w-50" elevation={0} variant="outlined">
                    <Avatar sx={{ width: 56, height: 56 }} >N</Avatar>
                    <div className="ms-4 d-flex flex-column">
                        <h5>lorem ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                    </div>
                </Paper>
                <Paper className="d-flex align-items-center p-3 w-50" elevation={0} variant="outlined">
                    <Avatar sx={{ width: 56, height: 56 }} >N</Avatar>
                    <div className="ms-4 d-flex flex-column">
                        <h5>lorem ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                    </div>
                </Paper>
            </div>
        </div>
    );
};
