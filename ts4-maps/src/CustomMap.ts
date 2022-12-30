import { Mappable } from "./interfaces/Mappable-I";



export class CustomMap {

  private googleMap: google.maps.Map;
  private mapId: HTMLElement;

  constructor(elementId) {
    this.mapId = document.getElementById(elementId) as HTMLElement;
    this.googleMap = new google.maps.Map(this.mapId, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }


  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker(
      {
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng
        }
      });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker)
    });
  }


}