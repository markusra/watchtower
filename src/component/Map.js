import React, {Component} from "react";
import Script from 'react-load-script'

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

    var params = {
        start: 'Wed Feb 14 03:46:04 +0000 2017',
        end: 'Wed Feb 15 04:23:42 +0000 2017'
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    var url = "http://localhost:3000/api/tweets1?" + query;

    fetch(url)
      .then(result => {
        result.json().then(d => {window.replace_locations(d.data)});
      });

    var styles = {
      default: null,
      hide: [
        {
          featureType: 'poi.business',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        }
      ]
    };

  }
}

export default Map;


