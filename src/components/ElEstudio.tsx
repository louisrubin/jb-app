import { useState } from 'react';
import jbEstudio from '../assets/jb-removebg2.png';
import './ElEstudio.css';

const ElEstudio = () => {

    // funcion que se me ocurrió y me gustó jaja 
    const [bgColor, setBgColor] =  useState(true);
    const handleClick = () => {
        setBgColor( ! bgColor);
    }

    return(
        <div id="presentation-container" className="md:flex justify-evenly gap-8 scroll-mt-26 mx-auto py-15 px-10 lg:px-55 my-2 text-start bg-gray-300 rounded-xl">
            <div className="estudio-left flex flex-col gap-8 md:w-2/3 text-lg ">
            
                <h2 className="self-start text-3xl font-bold uppercase">El Estudio</h2>

                <p>Un asesoramiento preciso y oportuno es fundamental para que tomes decisiones informadas en momentos claves de la vida, como ser al momento de separarse e incluso antes, por conflictos en el trabajo, accidentes y/o enfermedades laborales, fallecimiento de algún familiar, entre otras situaciones, donde lo ideal es consultar con un profesional en derecho.</p>
                
                <p>Nos caracterizamos por brindar un asesoramiento y acompañamiento jurídico con responsabilidad, eficacia y seriedad.</p>
                
                <strong onClick={handleClick} className={`self-end text-right italic ${bgColor ? "bg-[#ffff82]" : "bg-[#FAC832]" }`}>JB Estudio Jurídico <span className="not-italic">⚖️</span></strong>
            </div>

            <div className="estudio-right mt-10 md:mt-0  md:w-1/3 ">
                {/* <h1 className="text-center p-30 ">right side</h1> */}
                <img src={ jbEstudio } className=' '/>
            </div>
        </div>
        
    );
} 


export default ElEstudio;