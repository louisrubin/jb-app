import logoJB from "../assets/JB-light.png";
import details from "../details";

const DecorationFooter = () => {
    return(
        <>
            <div className="flex items-center lg:w-3/4 mb-8 mx-auto justify-center gap-2 lg:gap-6 ">
            {/* Línea izquierda */}
                <div className="div-linea flex-1 border-gray-300"></div>

                {/* Ícono central */}
                <div className="flex flex-col items-center select-none">
                    <img src={ logoJB } className="bg-[#1C3D4D]  h-35 w-35 lg:h-40 lg:w-40 rounded-full" />
                    <span id="span-jb-footer">{details.nombre}</span>
                </div>

                {/* Línea derecha */}
                <div className="div-linea flex-1 border-gray-300"></div>
            </div>

        </>
    );
}


export default DecorationFooter;