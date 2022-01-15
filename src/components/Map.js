import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1IjoiZ2FvMTRvIiwiYSI6ImNreWc5ZWV1cjBmYWwybnA5dXlsMjl6bWgifQ.q92XxdmVuWGzEdIKgIdYsA';

// Sample data 
const data = [
	{
		"location": "401 Sunset Ave, Windsor, ON N9B 3P4",
		"city": "Windsor",
		"state": "Ontario",
		"coordinates": [-83.059499762,42.303998784],
	},
	{
		"location": "799 Crawford Ave, Windsor, ON N9A 5Y1",
		"city": "Windsorr",
		"state": "Ontario",
		"coordinates": [-83.046480,42.308620],
	},
	{
		"location": "2110 Wyandotte St W, Windsor, ON N9B 1J9",
		"city": "Windsorrr",
		"state": "Ontario",
		"coordinates": [-83.060360,42.306150],
	}
]

class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -83.059499762,
			lat: 42.303998784,
			zoom: 13
		}
	}
   

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/gao14o/ckyg9gtde0y8715o17xizv9e6', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
                                .setLngLat(location.coordinates)
                                .setPopup(new mapboxgl.Popup({ offset: 30 })
                                .setHTML('<h4>' + location.city + '</h4>' + location.location))
                                .addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
			</div>
		)
	}
}

export default Mapp;