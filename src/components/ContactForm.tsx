
export default function ContactForm() {
    return(
        <>
            <form >
                <div className="flex flex-col md:flex-row gap-4">
                    <input className="md:w-3/5 h-12 md:h-8" type="text" placeholder='Nombre y Apellido' />
                    <input className="md:w-2/5 h-12 md:h-8" type="number" placeholder='Teléfono' />
                </div>
                
                <input className="w-full h-12 md:h-8 mt-4" type="email" placeholder='Correo electrónico' />
                
                <textarea  className="w-full h-45 mt-4 py-2 pr-3 resize-none" placeholder='Su consulta' />
                
                <div className="w-4/5 md:w-3/5 mx-auto mt-4">
                    <button className="w-full h-12 md:h-8 bg-blue-700 uppercase" type="submit">Enviar Consulta</button>
                </div>
                
            </form>
        </>
    );
}