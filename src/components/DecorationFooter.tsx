import logoJB from "../assets/JB-light.png";
import details from "../details";

const DecorationFooter = () => {
    return(
        // <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 w-4/6 mx-auto">
			
		// 	<div className="grid grid-rows-2 col-span-2 pl-[50%]">
		// 		<div className="row-span-1 border-b">

		// 		</div>
		// 	</div>



		// 	<div className="flex flex-col col-span-2 items-center select-none">
		// 		<img src={logoJB} alt="JB Estudio Jurídico" className="h-33 p-2 mb-2 bg-[#24464c] rounded-full" />
		// 		<span id="span-jb-footer">{details.nombre}</span>
		// 	</div>



		// 	<div className="col-span-2">

		// 	</div>

		// </div>

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