import './ContactButton.css';
import details from "../details";
import whatsappLogo from "../assets/social/whatsapp.svg";

type Props = {      // definimos un tipo de dato llamado Props
  children: string,
};

export default function ContactButton( {children}: Props ) {
  const urlWhatsapp = `https://wa.me/549${details.telFull}?text=${details.mensajeWhatsApp}`;

  return (
    <div className="flex justify-center items-center select-none">
        <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
            <div id="div-contactanos"
                className="flex justify-center py-4 h-14 w-40 shadow-lg"
                >
                  {children}
                <img src={whatsappLogo} className="ml-1 h-full pl-1" />
            </div>
        </a>
    </div>
  );
}
