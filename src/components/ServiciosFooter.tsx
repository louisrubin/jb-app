import './ServiciosFooter.css';
import ContactButton from "./ContactButton";
import details from '../details';

export default function ServiciosFooter(){
    return(
        <div className="servicios-footer-main-container text-center 
        px-[5%] md:px-[10%] py-[20%] md:py-[6%] md:p-2/3 mx-auto bg-gray-300">
                
                {/* <h2 className="w-full md:w-4/5 mx-auto text-white
                    text-2xl md:text-3xl mb-8 font-bold p-2 md:p-4 "
                    >ASESORAMIENTO JURÍDICO
                </h2> */}

                <h3 className="w-[90%] md:w-3/5 mx-auto text-xl md:text-2xl font-bold mb-14 md:mb-10 uppercase"
                    >Trabajamos para ayudarte ante situaciones familiares, laborales, judiciales y civíles.
                </h3>
                
                <p className='w-3/4 mx-auto mb-2'>Para más información o solicitar un turno, comunícate al:</p>
                
                <ContactButton>{`${details.telArea}-${details.telNum}`}</ContactButton>
        </div>
    )
}