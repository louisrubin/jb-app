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

     // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const newFormData = { ...formData, [name]: value };

        setFormData(newFormData);
        setIsValid(validarForm(newFormData));   // validad formulario
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await sendEmail(formData);

        if (success) {
            alert(`📪Consulta enviada correctamente📧`);
            setFormData({ name: "", telefono: "", email: "", mensaje: "" });
            setIsValid(false);
        } else {
            alert("Error al enviar el correo");
        }
    };

    return(
        <>
            <form onSubmit={handleSubmit} className="md:pt-2">
                <div className="flex flex-col md:flex-row gap-4">
                    <input 
                        className="md:w-3/5 h-12 md:h-8" 
                        type="text" 
                        name="name" 
                        placeholder='Nombre y Apellido' 
                        value={formData.name}
                        onChange={handleChange}
                        />
                    <input 
                        className="md:w-2/5 h-12 md:h-8" 
                        type="number" 
                        name="telefono" 
                        placeholder='Teléfono' 
                        value={formData.telefono}
                        onChange={handleChange}
                        />
                </div>
                
                <input 
                    className="w-full h-12 md:h-8 mt-4" 
                    type="email" 
                    name="email" 
                    placeholder='Correo electrónico' 
                    value={formData.email}
                    onChange={handleChange}
                    />
                
                <textarea  
                    className="w-full h-45 mt-4 py-2 pr-3 resize-none" 
                    name="mensaje" 
                    placeholder='Su consulta' 
                    value={formData.mensaje}
                    onChange={handleChange}
                    />
                
                <div className={`w-4/5 md:w-3/5 mx-auto mt-4`}
                    >
                    <button 
                        type="submit"
                        className={`w-full h-12 md:h-8 bg-blue-700 uppercase ${!isValid ? "opacity-50 " : "cursor-pointer" }`} 
                        disabled={!isValid}
                        >
                            Enviar Consulta
                    </button>
                </div>
                
            </form>
        </>
    );
}