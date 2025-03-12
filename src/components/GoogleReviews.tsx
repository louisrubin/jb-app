import { ReactGoogleReviews } from "react-google-reviews";

const maxReviews = 10;      // cantidad de reseñas a renderizar y mostrar

const GoogleReviews  = () => {
    return (
        <>
            <h2 className="text-center mb-5 mt-15 font-bold text-2xl lg:w-2/3 lg:text-4xl mx-auto">Opiniones de Nuestros Clientes</h2>
            
            <ReactGoogleReviews 
                layout="badge" 
                badgeClassName="mb-8"
                loadingMessage="Cargando puntuación."
                errorMessage="Hubo un error al cargar la puntuación."
                loaderClassName={ "text-white" }

                featurableId={import.meta.env.VITE_FEATURABLE_ID}
            />


            <ReactGoogleReviews 
                layout="custom" 
                maxCharacters={150}
                disableTranslation={true}

                loaderClassName={ "text-white" }
                // loaderSpinnerStyle={ { "fill": "white" } }   // default: blue

                loadingMessage="Cargando comentarios."
                errorMessage="Hubo un error al cargaros los comentarios."
                
                featurableId={import.meta.env.VITE_FEATURABLE_ID}

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

export default GoogleReviews;