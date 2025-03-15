import './Servicios.css';
// import imagenServicios from '../assets/justicia-servicios.jpg';
// import JB_logo from '/JB-light.png';
import familyIcon from '../assets/services/family.png';
import jobIcon from '../assets/services/job.png';
import moneyIcon from '../assets/services/money.png';
import justiceIcon from '../assets/services/justice.png';
import signingIcon from '../assets/services/signing.png';
import bankIcon from '../assets/services/bank.png';
import ServicioCard from './ServicioCard';
// import ServiciosFooter from './ServiciosFooter';


export default function Servicios() {
    return (
        <div id='servicios-container' 
            className='servicios-conteiner scroll-mt-20 bg-gray-700 md:pt-5'>
            <div className="w-4/5 md:w-2/3 mx-auto py-12 uppercase text-center">
                <h2 id='h2-titulo-servicios' className='text-3xl md:text-4xl text-bold'>Áreas de especialización</h2>
                <p className='mt-6'>Asesoramiento legal profesional y personalizado.</p>
            </div>

            <div className='flex flex-wrap justify-evenly w-4/5 mx-auto gap-2'>
                {
                    serviciosList.map( (item) => (
                        <ServicioCard 
                            key={item.titulo}
                            titulo={item.titulo} 
                            descripcion={item.descripcion}
                            imagen={item.imagen} 
                        />
                    ) )
                }
            </div>

            {/* <img className='zoom scale-x-[-1]' src={imagenServicios} /> */}
        </div>

    );    
}

const serviciosList = [
    {
        titulo: 'Derecho de Familia',
        descripcion: 'Alimentos, divorcios, filiación, cuidado personal, régimen de comunicación.',
        imagen: familyIcon,
    },
    {
        titulo: 'Derecho Laboral',
        descripcion: 'Despidos, accidentes de trabajo, reclamos.',
        imagen: jobIcon,
    },
    {
        titulo: 'Derecho previsional',
        descripcion: 'Jubilaciones, pensiones, reajustes.',
        imagen: moneyIcon,
    },
    {
        titulo: 'Daños y Perjuicios',
        descripcion: 'Reclamamos indemnizaciones por daños materiales y morales.',
        imagen: justiceIcon,
    },
    {
        titulo: 'Derecho Sucesorio',
        descripcion: 'Gestión de herencias y sucesiones sin complicaciones.',
        imagen: signingIcon,
    },
    {
        titulo: 'Cobro y cancelación de deudas.',
        descripcion: 'Deuda Prescripta. Deuda Inexistente. Deuda ya pagada.',
        imagen: bankIcon,
    },
    // {
    //     titulo: '',
    //     descripcion: '',
    //     imagen: bankIcon,
    // },
];
