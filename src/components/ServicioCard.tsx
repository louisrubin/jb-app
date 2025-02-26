
type propsPadre = Partial <
//usar type y combinarlo con Partial<> para que las props sean opcionales
    {
        titulo: string;
        descripcion: string;
        imagen: string;
    }>

export default function ServicioCard( props: propsPadre) {

    return(
        <div className="servicioCard flex flex-col w-full md:w-2/5 lg:w-1/4 items-center 
            gap-4 p-4 mb-4 text-center bg-gray-800 shadow-lg ">

            <div>
                <img src={props.imagen} className="h-30" />
            </div>

            <div>
                <h3 className="text-xl font-bold uppercase">{props.titulo}</h3>
            </div>

            <div>
                <p className="w-4/5 mx-auto ">{props.descripcion}</p>
            </div>

        </div>
    );
}
