import img1 from '../assets/joana-britez.jpeg';
import img2 from '../assets/tatiana-pirelli.jpeg';
// import img2 from '../assets/tatiana-pirelli-removebg.png';
import './ElEstudio.css';
import details from '../details';
import { useEffect, useState } from 'react';



// props como un objeto
type props = { className?: string; };

// desestructuración para extraer classNameParam
const JB = ( { className = "" } : props ) => {
    return(
        <strong className={`strong-JB self-end text-right italic bg-[#cac4a2] ${className}`}
        >JB Estudio Jurídico 
            <span className="not-italic ml-1">⚖️</span>
        </strong>
    );
}

const ElEstudio = () => {
    const [isMovile, setIsMovile] = useState(false);
    const [modoHorizontal, setModoHorizontal] = useState(false);

    // si volteo en modo horizontal
    useEffect( () => {
        const handleHorizontal = () => {
            const modoHorizontal = window.matchMedia("(orientation: landscape)").matches;
        
            if (modoHorizontal) {
                setModoHorizontal(true);    // set modo horizontal
            } else {
                setModoHorizontal(false);    // set modo horizontal
            }
        }
        handleHorizontal();
        
        window.addEventListener("resize", handleHorizontal)
        return () => window.removeEventListener("resize", handleHorizontal);
    }, [] )

    useEffect( () => {
        const handleStrongJB = () => {
            if (screen.height > screen.width) {
                setIsMovile(true);    // es celular
            } else {
                setIsMovile(false);   // es monitor
            }
        }

        handleStrongJB();   // al recargar la pagina
        
        window.addEventListener("resize", handleStrongJB)
        return () => window.removeEventListener("resize", handleStrongJB);
    }, [])
    return(
        <div id="presentation-container" className="flex flex-col xl:flex-row justify-center gap-6 scroll-mt-45 py-15 px-10 2xl:px-40 my-2 text-start bg-gray-300 rounded-xl">
            
            {/* LADO IZQUIERDO */}
            <div className="estudio-left flex flex-col gap-8 md:w-[90%] lg:w-[75%] mx-auto xl:w-1/2 text-xl ">
            
                <h2 className="text-center xl:self-start text-3xl font-bold uppercase">El Estudio</h2>

                <p>Un asesoramiento preciso y oportuno es fundamental para que tomes decisiones informadas en momentos claves de la vida, como ser al momento de separarse e incluso antes, por conflictos en el trabajo, accidentes y/o enfermedades laborales, fallecimiento de algún familiar, entre otras situaciones, donde lo imprescindible es consultar con un profesional en derecho.</p>
                
                <p>Nos caracterizamos por brindar un asesoramiento y acompañamiento jurídico con responsabilidad, eficacia y seriedad.</p>
                
                {   // componente sin parametros
                    !isMovile ? <JB /> : null }
            </div>


            {/* LADO DERECHO */}
            <div className="estudio-right flex justify-center xl:w-2/5 gap-5 rounded-xl">
                
                { abogadasList.map( (item, index) => (
                    <div key={index} className={`relative w-1/2 
                        ${ modoHorizontal ? 'max-h-[25vw] max-w-[15vw] ' : 'max-h-[30vh] max-w-[20vh] ' }  md:mx-0 rounded-xl overflow-hidden`}>
                        
                        
                        <img src={ item.imagen } className='select-none w-full h-full object-cover drop-shadow-[3px_3px_4px_rgba(0,0,0,1)] '/>
                        <div id='div-nombres' className='absolute bottom-0 w-full text-black text-center bg-[rgba(202,196,162,1)]'>
                            <p className='py-1'>{item.nombre}</p>
                            <span className='italic'>{item.profesion}</span>
                        </div>
                        
                    </div>
                ))}

            </div>
            {   // componente con parametro
                    isMovile ? <JB className='mt-10' /> : null 
            }
        </div>
        
    );
} 

const abogadasList = [
    {
        nombre: details.abogada1_name,
        profesion: 'Abogada',
        imagen: img1,
    },
    {
        nombre: details.abogada2_name,
        profesion: 'Abogada',
        imagen: img2,
    },
]


export default ElEstudio;