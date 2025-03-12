import { ReactGoogleReviews } from "react-google-reviews";
import BadgeGoogleReviews from "./BadgeGoogleReviews";
import { config } from "../config";

const maxReviews = 10;      // cantidad de reseñas a renderizar y mostrar

const GoogleReviewsAPI  = () => {
    return (
        <>
            <h2 className="text-center mb-5 mt-15 font-bold text-2xl lg:w-2/3 lg:text-4xl mx-auto">Opiniones de Nuestros Clientes</h2>

            <BadgeGoogleReviews theme="light" />

            <ReactGoogleReviews 
                layout="custom" 
                maxCharacters={150}
                disableTranslation={true}

                loaderClassName={ "text-white" }
                // loaderSpinnerStyle={ { "fill": "white" } }   // default: blue

                loadingMessage="Cargando comentarios."
                errorMessage="Hubo un error al cargaros los comentarios."
                
                featurableId={config.featurableID}

                renderer={
                    (reviews) => (
                        <ReactGoogleReviews 
                            layout="carousel" 
                            carouselSpeed={3200}        // milisegundos
                            // maxItems={3}              // cant reseñ mostradas por seg default: 3
                            reviews={reviews.slice(0, maxReviews)} // Limita cant reseñas
                        />
                    )
                }
            />

        </>
        
    );
}

export default GoogleReviewsAPI;