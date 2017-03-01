import React, {Component} from "react";
import Script from 'react-load-script'

class Map extends Component{
  render() {
    return(
    <div style={styles.container}>
      <div id="map_canvas" style={styles.map}></div>
      <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbIZYJbik-PmH7aV2ahKmQvki6WH3Z-AQ&sensor=true&libraries=visualization"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
    </div>
    )
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })

    window.setup_map();

    fetch(`http://localhost:3000/api/tweets1?start=1&end=22`)
      .then(result => {
        result.json().then(d => {window.replace_locations(d.data)});
      });

  }
}

export default Map;

const styles = {
  container: {
    width: '100%',
    height: '65%'
  },
  map: {
    width: '100%',
    height: '100%',
    border: '1px solid #414141',

  }

};
