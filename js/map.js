if( document.getElementById("map") ) {

	var map;
	var marker;
	var image = "img/map_mark.png";
	var styles;
	var latCoord;
	var lngCoord;

	styles = [
	    {
	        "featureType": "administrative",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#444444"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#f2f2f2"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "saturation": "-100"
	            },
	            {
	                "lightness": "57"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "lightness": "1"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 45
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.bus",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.bus",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "saturation": "0"
	            },
	            {
	                "lightness": "0"
	            },
	            {
	                "gamma": "1.00"
	            },
	            {
	                "weight": "1"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.bus",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "saturation": "-100"
	            },
	            {
	                "weight": "1"
	            },
	            {
	                "lightness": "0"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.rail",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.rail",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "gamma": "1"
	            },
	            {
	                "lightness": "40"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.rail",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "saturation": "-100"
	            },
	            {
	                "lightness": "30"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#d2d2d2"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    }
	]

	function initMap() {

		if( bodyWidth > 900 ) {


			latCoord = 50.5788711;
			lngCoord = 36.5918531;

		} else {
			
			latCoord = 50.5788711;
			lngCoord = 36.5948531;

		}

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: latCoord, lng: lngCoord},
			scrollwheel: false,
			scaleControl: false,
			zoom: 15,
			styles: styles
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 50.5788711, lng: 36.5948531},
			map: map,
			icon: image,
			title: 'Метр Квадратный'
		});

		marker.addListener('click', toggleBounce);

	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

}