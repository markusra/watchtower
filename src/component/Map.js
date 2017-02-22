import React, {Component} from "react";
import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";

class Map extends Component{
  render() {
    const {googleMaps} = this.props;
    return(
    <div style={style}>
      <GoogleMap
        googleMaps={googleMaps}

        coordinates={[
          {
            title: "test",
            position: {
              lat: 63.421,
              lng: 10.402
            }
          }
        ]}
        center={{lat: 65, lng: 11}}
        zoom={5}
        onLoaded={(googleMaps, map) => {
          map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
        }}
      />
    </div>
    )
  }
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: "AIzaSyCbIZYJbik-PmH7aV2ahKmQvki6WH3Z-AQ",
})

const style = {
  width: '40em',
  height: '25em',
  border: '1px solid #414141'

};
