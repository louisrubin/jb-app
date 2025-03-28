import { useState } from 'react';
import jbEstudio from '../assets/jb-removebg2.png';
import './ElEstudio.css';

const ElEstudio = () => {
    return(
        <div id="presentation-container" className="md:flex justify-evenly gap-8 scroll-mt-45 mx-auto py-15 px-10 2xl:px-75 my-2 text-start bg-gray-300 rounded-xl">
            <div className="estudio-left flex flex-col gap-8 md:w-2/3 text-xl ">
            
                <h2 className="self-start text-3xl font-bold uppercase">El Estudio</h2>

                <p>Un asesoramiento preciso y oportuno es fundamental para que tomes decisiones informadas en momentos claves de la vida, como ser al momento de separarse e incluso antes, por conflictos en el trabajo, accidentes y/o enfermedades laborales, fallecimiento de algún familiar, entre otras situaciones, donde lo imprescindible es consultar con un profesional en derecho.</p>
                
                <p>Nos caracterizamos por brindar un asesoramiento y acompañamiento jurídico con responsabilidad, eficacia y seriedad.</p>
                
                <strong className={`strong-JB self-end text-right italic select-none bg-[#cac4a2]`}>JB Estudio Jurídico <span className="not-italic">⚖️</span></strong>
            </div>

            <div className="estudio-right mt-10 md:mt-0  lg:w-1/4 ">
                {/* <h1 className="text-center p-30 ">right side</h1> */}
                <img src={ jbEstudio } className=' mx-auto my-auto '/>
            </div>
        </div>
        
    );
} 


export default ElEstudio;