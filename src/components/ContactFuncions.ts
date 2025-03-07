// ARCHIVO PARA APARTAR LAS FUNCIONES Y LÓGICA
import emailjs from "@emailjs/browser";
import { config } from "../config";

export interface FormData {
    name: string;
    telefono: string;
    email: string;
    mensaje: string;
}

export function capitalizeWords(sentence: string): string {
  // capitalizar cada palabra
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
}

export const validarForm = (data: FormData): boolean => {
    return data.name.trim() !== "" 
            && data.telefono.trim() !== "" 
            && data.email.trim() !== ""
            && data.mensaje.trim() !== "";
};

export const sendEmail = async (formData: FormData) => {
  try {
    // const response = "ok";
    const response = await emailjs.send(
      config.emailJsServiceId,
      config.emailJsTemplateId,
      // formData,
      {
        name: capitalizeWords(formData.name),  
        telefono: formData.telefono,  
        correo: formData.email,  
        mensaje: formData.mensaje,
      },
      
      config.emailJsPublicKey // Reemplázalo con tu Public Key de EmailJS
    );
    
    console.log("Correo enviado correctamente:", response);
    return true;
    
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return false;
  }
};
