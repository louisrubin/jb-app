import { useState } from "react";
import { validarForm, sendEmail, FormData } from "./ContactFuncions";


export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
      name: "",
      telefono: "",
      email: "",
      mensaje: "",
    });
    const [isValid, setIsValid] = useState(false);
    const [isSending, setIsSending] = useState(false);
    // const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

     // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, tagName, type } = e.target;

        let formattedValue = value;

        if (tagName.toLowerCase() == 'textarea') {
            // Capitaliza solo la primera letra de cada oración despues de: . ! ?
            formattedValue = value.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
        } else if (type != 'email') {
            // capitalizar cada palabra
            formattedValue = value.replace(/\b\w/g, (char) => char.toUpperCase());
        }


        const newFormData = { ...formData, [name]: formattedValue };

        setError(false);    // para que esconda el mensaje de error
        setFormData(newFormData);
        setIsValid(validarForm(newFormData));   // validad formulario
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // config hooks
        setIsSending(true);     // cambia boton --> "enviando..."
        setError(false);
        // setSuccess(false);

        const success = await sendEmail(formData);

        if (success) {
            alert(`📪Consulta enviada correctamente📧`);
            setFormData({ name: "", telefono: "", email: "", mensaje: "" });
            setIsValid(false);
            // setSuccess(true);       // envio exitoso
        } else {
            // alert("Error al enviar el correo");
            setError(true);        // error al enviar
        }
        setIsSending(false);
    };

    return(
        <>
            <form onSubmit={handleSubmit} className="md:pt-2">
                <div className="flex flex-col md:flex-row gap-4">
                    <input 
                        className="md:w-3/5 h-12 md:h-8" 
                        type="text" 
                        name="name" 
                        placeholder='NOMBRE Y APELLIDO' 
                        value={formData.name}
                        onChange={handleChange}
                        />
                    <input 
                        className="md:w-2/5 h-12 md:h-8" 
                        type="number" 
                        name="telefono" 
                        placeholder='TELÉFONO' 
                        value={formData.telefono}
                        onChange={handleChange}
                        />
                </div>
                
                <input 
                    className="w-full h-12 md:h-8 mt-4" 
                    type="email" 
                    name="email" 
                    placeholder='CORREO ELECTRONICO' 
                    value={formData.email}
                    onChange={handleChange}
                    />
                
                <textarea  
                    className="w-full h-45 mt-4 py-2 pr-3 resize-none" 
                    name="mensaje" 
                    placeholder='SU CONSULTA' 
                    value={formData.mensaje}
                    onChange={handleChange}
                    />
                
                <div className={`w-4/5 md:w-3/5 mx-auto mt-4`}>
                    <span className={`span-email-error text-xs uppercase ${error ? 'block' : 'hidden'}`}>Hubo un error al enviar su consulta.</span>
                    <button 
                        type="submit"
                        className={`w-full h-12 md:h-8 uppercase 
                            ${!isValid ? "opacity-50" : "cursor-pointer" }`} 
                            disabled={!isValid}
                        >
                            { isSending ? "Enviando..." : "Enviar Consulta"}                            
                    </button>
                </div>
                
            </form>
        </>
    );
}