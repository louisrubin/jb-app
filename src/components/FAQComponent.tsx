import './FAQComponent.css';
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";     // librería de iconos

interface FAQItem {
    pregunta: string;
    respuesta: string;
    respuesta2: string;
    cierre: string;
  }

const FAQComponent = () => {
    return(
        <div id="faq-container" className="scroll-mt-35 my-10 md:my-20 w-6/7 md:w-3/4 mx-auto">
            <h1 className="font-bold text-center text-3xl mb-10">Preguntas</h1>

            <Accordion.Root type="single" collapsible className="w-full max-w-2xl mx-auto space-y-6">
                {PREGUNTAS_RESP.map((item, index) => (
                    <Accordion.Item key={index} value={`item-${index}`} className="border rounded-lg">
                        
                        {/* PREGUNTA */}
                        <Accordion.Header>
                            <Accordion.Trigger className="accordion-trigger w-full flex justify-between items-center p-4 md:px-8 text-left md:text-lg font-medium border rounded-md">
                                {item.pregunta}
                                <ChevronDown className="h-5 w-5 AccordionChevron" />
                            </Accordion.Trigger>
                        </Accordion.Header>

                        {/* RESPUESTA */}
                        <Accordion.Content className="acordion-respuesta p-4 md:px-8">
                            <p className='mb-3'>{item.respuesta}</p>
                            <p className='mb-6'>{item.respuesta2}</p>
                            <p className='text-center italic text-yellow-400 w-5/6 md:w-2/3 mx-auto'>{item.cierre}</p>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>

            <h2 className='mt-10 text-lg italic text-center '>
                ¿Tenés otra duda? Comunícate
                <span className='not-italic'> 👇</span>
            </h2>
        </div>
    );
}

export default FAQComponent; 



const PREGUNTAS_RESP: FAQItem[] = [
    {
        pregunta: 'Quiero jubilarme pero no tengo aporte. ¿Qué puedo hacer?',
        respuesta: 'Para el caso de no contar con la totalidad de 30 años de aportes, existen diferentes moratorias para poder comprar los años que faltan.',
        respuesta2: 'Es importante asesorarse con un profesional que sabrá evaluar tu situación y así saber que tipo de prestación previsional te corresponde.',
        cierre: 'Te ofrecemos asesoría personalizada para ayudarte a gestionar tu jubilación.',
    },
    {
        pregunta: 'Me despidieron estando embarazada. ¿Qué hago?',
        respuesta: 'La ley establece una prohibición del despido durante el embarazo y parte del plazo posparto. En caso de que esto suceda, la mujer tiene derecho a recibir una indemnización agravada, además de la indemnización por despido ordinario.',
        respuesta2: 'Esta indemnización adicional corresponde a un año de remuneraciones.',
        cierre: '¡Contactanos para más información!',
    },
    {
        pregunta: 'Me dijeron que no vaya más a trabajar. ¿Qué significa?',
        respuesta: 'El empleador debe comunicar por escrito y en forma suficientemente clara los motivos en que se funda la ruptura del contrato.',
        respuesta2: 'Si no responde en el plazo de ley, podés considerarte despedido y reclamar la indemnización que te corresponda.',
        cierre: 'En JB ESTUDIO JURÍDICO te ayudamos a gestionar tu reclamo y obtener la indemnización que te corresponde.',
    },
    {
        pregunta: '¿Qué puedo hacer si sufro un accidente laboral o una enfermedad?',
        respuesta: 'Debés denunciarlo de inmediato. Podés hacerlo a través de tu empleador, quien debe informar a la ART, o comunicarte directamente con la ART por su línea de atención. Incluso un testigo puede hacer la denuncia.',
        respuesta2: 'Si la ART rechaza tu denuncia, podés iniciar el trámite ante la Comisión Médica correspondiente a tu domicilio o lugar de trabajo para reclamar tu derecho a la cobertura.',
        cierre: '¡No estás solo! En JB ESTUDIO JURÍDICO te apoyamos con asesoría profesional.',
    },


    {
        pregunta: '¿Qué debo hacer para iniciar mi divorcio?',
        respuesta: 'Para iniciar un divorcio, tenés dos opciones: solicitarlo de manera conjunta, si ambos cónyuges están de acuerdo, o de manera unilateral, si solo uno lo pide.',
        respuesta2: 'No es necesario justificar una causa ni cumplir con un plazo previo. Solo se debe presentar un convenio regulador que establezca cómo se dividirán los bienes, la custodia de los hijos (si los hay) y otros acuerdos relacionados.',
        cierre: '¡Consultanos!',
    },
    {
        pregunta: '¿Puedo divorciarme aunque mi cónyuge no quiera?',
        respuesta: 'Sí, no necesitás el consentimiento de tu cónyuge para iniciar el divorcio. La ley permite que cualquiera de los dos lo solicite de manera unilateral, sin necesidad de justificar una causa ni cumplir un plazo previo.',
        respuesta2: '',
        cierre: '¡Contáctanos para resolver tu situación!',
    },
    {
        pregunta: '¿Puedo quedarme viviendo en la casa después del divorcio?',
        respuesta: 'La atribución de la vivienda depende de varios factores. El juez evalúa quién tiene el cuidado de los hijos, la situación económica de cada cónyuge, su estado de salud y edad, entre otros aspectos.',
        respuesta2: 'Para conocer tu situación particular, no dudes en consultarnos, te ofrecemos atención personalizada.',
        cierre: '¡Hablemos de tu caso!',
    },
    {
        pregunta: '¿Tengo derecho a una compensación económica después del divorcio?',
        respuesta: 'Sí, si el divorcio te genera un desequilibrio manifiesto que implique un empeoramiento de tu situación debido al vínculo matrimonial y su ruptura, podés solicitar una compensación.',
        respuesta2: '',
        cierre: '¡Contactanos para más detalles!',
    },
    {
        pregunta: '¿Qué puedo hacer si la madre/padre no me deja ver a mi hijo/a?',
        respuesta: 'Ambos progenitores tienen derecho y obligación de mantener contacto con sus hijos. Si el otro progenitor impide o interrumpe el régimen de comunicación sin una causa justificada, está incurriendo en una falta grave, que incluso puede constituir un delito.',
        respuesta2: 'Si esto ocurre de manera reiterada, podés recurrir a la justicia para exigir su cumplimiento.',
        cierre: 'Te orientamos en cada paso para garantizar que tus derechos sean protegidos.',
    },
    {
        pregunta: 'El papá de mis hijos no me pasa la cuota alimentaria. ¿Qué puedo hacer?',
        respuesta: 'Se debe recurrir a la vía judicial de manera urgente. Los alimentos son una obligación prioritaria, y quien se queda a cargo del cuidado del hijo también cumple con esta obligación.',
        respuesta2: '',
        cierre: '¡Contáctanos para que te asesoremos y resolvamos tu situación!',
    },
    // {
    //     pregunta: '',
    //     respuesta: '',
    //     respuesta2: '',
    //     cierre: '',
    // },

];
