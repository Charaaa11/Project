import React from "react";
import GoogleMapReact from "google-map-react";

function MapApp() {
  const coordinates = { lat: 42.518892815680495, lng: 43.14717271389263 };

  return (
    <div className="Map_App">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCzdTFOAPODi1TB8HsQfaLUdID1dL_8X8w" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={8}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default MapApp;
