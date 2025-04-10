import details from '../details';
import ContactForm from './ContactForm';
import './ContactSector.css';

const ContactSector = () => {
    return(
        <div id='contact-sector' className='contact-sector scroll-mt-40 flex flex-col lg:flex-row p-4/5 md:w-[65%] lg:w-[70%] mx-auto bg-gray-400 '>
            <div className='left-contact-sector text-black lg:w-1/2 py-8 px-10 '>
                <h2 className='tittle-form-left text-2xl text-black font-bold pb-2 uppercase text-center'>Comunicate con nosotros</h2>
                <p className='subtitulo text-center italic w-4/5 mx-auto text-xs pb-5'>Responderemos a la brevedad</p>
                
                <div className='tel-corr-addr'>
                    <span>Teléfono</span>
                    <p className='info-princ'>{details.telArea}-{details.telNum}</p>

                    <span>Correo Electrónico</span>
                    <a href={`mailto:${details.email}`} className='info-princ ' target="_blank" rel="noopener noreferrer">
                        {details.email}
                    </a>

                    <span>Dirección del Estudio</span>
                    <a href={details.urlMap} className='info-princ ' target="_blank" rel="noopener noreferrer">
                        {details.direccion}
                    </a>
                </div>
                

            </div>
            
            <div className='right-contact-sector lg:w-1/2 pb-10 md:py-8 px-10 shadow-lg'>
                {/* <h3 className='tittle-form-right text-2xl text-center text-black font-bold uppercase'>Enviar una consulta</h3> */}
                
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactSector;