import { config } from '../config';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
// import details from '../details';

export default function MapComponent() {    
    // const labelMarket = details.nombre;
    const zoomMap = 15.8;

    const containerStyle = {
        width: '100%',
        height: '300px'
    };

    const optionsObject = {
        draggable: false,           // Deshabilita el desplazamiento
        disableDefaultUI: true,     //(oculta o muestra los controles por defecto).
        zoomControl: true,          //(activa o desactiva el control de zoom).
        mapTypeControl: false,      //(control para cambiar el tipo de mapa).
        streetViewControl: false,   //(control de Street View)
        fullscreenControl: false,    //(botón para pantalla completa)
        styles: [ /* JSON de estilos personalizados */ ]
    };

    // -27.450822413834505, -58.9951432907057
    const centerObject = { 
        lat: -27.450822413834505, 
        lng: -58.9951432907057 
    };

    return (
      <LoadScript googleMapsApiKey={ config.mapKey }>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerObject}
          zoom={zoomMap}
          options={optionsObject}
        >
          <MarkerF position={centerObject}
          // label={labelMarket}
          />
        </GoogleMap>
      </LoadScript>
    );
  }