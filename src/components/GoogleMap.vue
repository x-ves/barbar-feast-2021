<template>
    <div class="google-map" id="map"></div>
</template>

<script>
export default {
    props: {
        center: {
            type: Object,
            default: () => ({ lat: 59.222651, lng: 25.031062 })
        },
        zoom: {
            type: Number,
            default: 15
        },
        streetViewControl: {
            type: Boolean,
            default: true
        },
        mapTypeControl: {
            type: Boolean,
            default: true
        },
        fullscreenControl: {
            type: Boolean,
            default: true
        },
        zoomControl: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            map: null,
            infowindow: null,
            markers: []
        };
    },
    watch: {
        center() {
            this.resetCenter();
            this.setMarker();
        }
    },
    mounted() {
        this.initMap();
        this.setMarker();
    },
    methods: {
        initMap() {
            const google = window.google
            this.map = new google.maps.Map(document.getElementById("map"), {
                center: this.center,
                zoom: this.zoom,
                maxZoom: 20,
                minZoom: 3,
                streetViewControl: this.streetViewControl,
                mapTypeControl: this.mapTypeControl,
                fullscreenControl: this.fullscreenControl,
                zoomControl: this.zoomControl,
                styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#303030"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#8f8f8f"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ff0000"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c2c2c2"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#00ccff"
      },
      {
        "weight": 2.5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
            });
        },
        resetCenter() {
            this.map.panTo({ lat: this.center.lat, lng: this.center.lng });
        },
        clearMarkers() {
            this.markers.forEach(marker => marker.setMap(null));
            this.markers = [];
        },
        setMarker() {
            const google = window.google
            this.clearMarkers();

            const marker = new google.maps.Marker({
                position: { lat: this.center.lat, lng: this.center.lng },
                map: this.map
            });

            this.markers.push(marker);

            const infowindow = new google.maps.InfoWindow({
                content: `
                <div id="content">
                    <p id="firstHeading" class="firstHeading">${location.name}</p>
                </div>
                `,
                maxWidth: 200
            });

            marker.addListener("click", () => {
                if (this.infowindow) this.infowindow.close();
                infowindow.open(this.map, marker);
                this.infowindow = infowindow;
            });
        }
    }
}
</script>

<style lang="scss">
    #map {
        width: 100%;
        height: 30rem;
    }
</style>