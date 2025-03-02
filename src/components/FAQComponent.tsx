import './FAQComponent.css';
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";     // librería de iconos

interface FAQItem {
    pregunta: string;
    respuesta: string;
  }

const PREGUNTAS_RESP: FAQItem[] = [
    {
        pregunta: '¿Hola?',
        respuesta: 'Sí.'
    },
    {
        pregunta: '¿Hola?',
        respuesta: 'Sí.'
    },
    {
        pregunta: '¿Hola?',
        respuesta: 'Sí.'
    },
    {
        pregunta: '¿Hola?',
        respuesta: 'Sí.'
    },

];

const FAQComponent = () => {
    return(
        <div id="faq-container" className="my-10 md:my-20 w-3/4 mx-auto">
            <h1 className="font-bold text-center text-3xl mb-10">Preguntas</h1>

            <Accordion.Root type="single" collapsible className="w-full max-w-2xl mx-auto space-y-6">
                {PREGUNTAS_RESP.map((item, index) => (
                    <Accordion.Item key={index} value={`item-${index}`} className="border rounded-lg">
                        
                        {/* PREGUNTA */}
                        <Accordion.Header>
                            <Accordion.Trigger className="accordion-trigger w-full flex justify-between items-center p-4 text-left text-lg font-medium hover:bg-green-800 transition border rounded-md">
                                {item.pregunta}
                                <ChevronDown className="h-5 w-5 transition-transform duration-200 AccordionChevron" />
                            </Accordion.Trigger>
                        </Accordion.Header>

                        {/* RESPUESTA */}
                        <Accordion.Content className="p-4 text-gray-300">
                            {item.respuesta}
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    );
}

export default FAQComponent; 


