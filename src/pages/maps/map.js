import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
// import {GoogleApi} from "./GoogleApi";
// import PropTypes from 'prop-types';
  

class Maps extends React.Component{
  
  render(){
    const styles={
      width: 'auto',
      border: '2px solid black',
      height: '400px'
    }
   
    
    return (
      <Map 
          google={this.props.google}
          zoom={8} 
          style={styles}
          centerAroundCurrentLocation={true}
          onClick={this.props.onMapClicked}
          initialCenter={{
            lat: 14,
            lng: -17
          }}

        >
 
        <Marker 
                onClick={this.onMarkerClick}
                name={'Current location'}
                title={'The marker`s title will appear as a tooltip.'}
                visible={true}
                />
        
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
    );
  }
}

export default  GoogleApiWrapper({ 
  apiKey: ("AIzaSyD4gubYMnGgmeItMZAiSwjosI1MqqcW1zU"),
  }
)(Maps); 