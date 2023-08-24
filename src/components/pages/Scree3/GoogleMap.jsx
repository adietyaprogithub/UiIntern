import React from "react";
import GoogleMapReact from "google-map-react";

export default function GoogleMap() {
  return (
    <div>
      <SimpleMap />
    </div>
  );
}

function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 18.5204,
      lng: 73.8567,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "200px", width: "500px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBtgnSHtbKCKgZMSRv-gA3luhk57RMPPN4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

// Define your AnyReactComponent here
const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red" }}>
    {text}
    <div>
      <img
        src="https://images.pexels.com/photos/18004075/pexels-photo-18004075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder image URL
        alt="Marker"
        style={{ width: 50, height: 50 }} // Adjust the width and height as needed
      />
    </div>
  </div>
);
