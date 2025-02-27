// ARCHIVO PARA APARTAR LAS FUNCIONES Y LÓGICA

export interface FormData {
    name: string;
    telefono: string;
    email: string;
    mensaje: string;
}

export const validarForm = (data: FormData): boolean => {
    return data.name.trim() !== "" 
            && data.telefono.toString() !== "" 
            && data.email.trim() !== ""
            && data.mensaje.trim() !== "";
};


// Enviar formulario usando EmailJS
// import emailjs from "emailjs-com";       // IMPORTAR
                                            // npm install emailjs-com

export const sendEmail = async (formData: FormData) => {
  try {
    const response = "ok";
    // const response = await emailjs.send(
    //   "TU_SERVICE_ID", // Reemplázalo con tu Service ID
    //   "TU_TEMPLATE_ID", // Reemplázalo con tu Template ID
    //   formData,
    //   "TU_PUBLIC_KEY" // Reemplázalo con tu Public Key de EmailJS
    // );
    
    console.log("Correo enviado correctamente:", response);
    return true;
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return false;
  }
};
