import React, { useEffect, useRef, useState } from "react";

export const Map = ({ center, zoom, nannies }) => {
  const ref = useRef();

  const getLatLong = async (address) => {
    const url = "https://maps.googleapis.com/maps/api/geocode/json";
    const key = "AIzaSyCyVmgXIL08YhSyk-HvPdo2IFUzzuyQIXg";
    const enocded_addr = encodeURI(address);
    const response = await fetch(`${url}?key=${key}&address=${enocded_addr}`);
    const json = await response.json();
    const result = json.results[0].geometry.location;

    return result;
  };

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    nannies.map((nanny) => {
      getLatLong(nanny.location).then((x) => {
        console.log(nanny.location);
        new google.maps.Marker({
          position: x,
          map,
          title: nanny.location,
        });
      }, []);
    });
  });

  return <div ref={ref} id="google-map" />;
};

export default Map;
