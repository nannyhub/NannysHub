import React, {useEffect, useRef} from "react";

export const Map = ({center, zoom}) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="google-map" />;
}

export default Map;