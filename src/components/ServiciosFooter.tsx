import './ServiciosFooter.css';
// import ContactButton from "./ContactButton";
// import details from '../details';

export default function ServiciosFooter(){
    return(
        <div className="servicios-footer-main-container text-center 
        px-[5%] md:px-[10%] py-[15%] md:py-[5%] mx-auto bg-gray-300">
                
                {/* <h2 className="w-full md:w-4/5 mx-auto text-white
                    text-2xl md:text-3xl mb-8 font-bold p-2 md:p-4 "
                    >ASESORAMIENTO JURÍDICO
                </h2> */}

                <hr className='md:w-[75%] mx-auto' />

                <h3 className="w-[90%] md:w-3/5 mx-auto text-xl md:text-2xl 
                    font-bold my-14 md:my-10 uppercase"
                    >Trabajamos para ayudarte ante situaciones familiares, laborales, judiciales y civíles.
                </h3>

                <hr className='md:w-[75%] mx-auto' />
                
                {/* <p className='w-3/4 mx-auto mb-2'>Para más información o solicitar un turno, comunícate al:</p>
                <ContactButton>{`${details.telArea}-${details.telNum}`}</ContactButton> */}
        </div>
    )
}