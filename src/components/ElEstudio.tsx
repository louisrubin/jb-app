import img1 from '../assets/jb-removebg2.png';
// import img1 from '../assets/tatiana-pirelli.jpeg';
import img2 from '../assets/tatiana-pirelli.jpeg';
import './ElEstudio.css';
import details from '../details';

const ElEstudio = () => {
    return(
        <div id="presentation-container" className="flex flex-col xl:flex-row justify-evenly gap-6 scroll-mt-45 mx-auto py-15 px-10 2xl:px-40 my-2 text-start bg-gray-300 rounded-xl">
            {/* LADO IZQUIERDO */}
            <div className="estudio-left flex flex-col gap-8 md:w-[90%] mx-auto xl:w-1/2 text-xl ">
            
                <h2 className="text-center xl:self-start text-3xl font-bold uppercase">El Estudio</h2>

                <p>Un asesoramiento preciso y oportuno es fundamental para que tomes decisiones informadas en momentos claves de la vida, como ser al momento de separarse e incluso antes, por conflictos en el trabajo, accidentes y/o enfermedades laborales, fallecimiento de algún familiar, entre otras situaciones, donde lo imprescindible es consultar con un profesional en derecho.</p>
                
                <p>Nos caracterizamos por brindar un asesoramiento y acompañamiento jurídico con responsabilidad, eficacia y seriedad.</p>
                
                <strong className={`strong-JB self-end text-right italic select-none bg-[#cac4a2]`}>JB Estudio Jurídico <span className="not-italic">⚖️</span></strong>
            </div>

            {/* LADO DERECHO */}
            <div className="estudio-right flex flex-col xl:w-1/2 md:flex-row md:justify-evenly gap-3 text-xl rounded-xl">
                
                { abogadasList.map( (item, index) => (
                    <div key={index} className='relative md:w-1/2 max-h-[450px] max-w-[300px] mx-auto rounded-xl overflow-hidden'>
                        <img src={ item.imagen } className='select-none w-full h-full object-cover'/>
                        <p id='p-nombres-abogadas' className='absolute py-1 bottom-15 w-full text-center bg-[rgba(202,196,162,0.7)]'>{item.nombre}</p>
                    </div>
                ))}

            </div>
        </div>
        
    );
} 

const abogadasList = [
    {
        nombre: details.abogada1_name,
        imagen: img1,
        styles: '',
    },
    {
        nombre: details.abogada2_name,
        imagen: img2,
        styles: '',
    },
]


export default ElEstudio;