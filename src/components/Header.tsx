import { useEffect, useState } from "react";
import "./Header.css";
import logoHeader from "../assets/JB-light.png";
// import menuLogo from "../assets/menu-icon2.png";
import details from "../details";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [menuMovile, setMenuMovile] = useState(false);

  // const toggleMenu = () => setMenuMovile(!menuMovile); // invierte el boolean

  useEffect(() => {
    // maneja el scroll, si baja el header se achica
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const containerRef = useRef<HTMLDivElement>(null);
  // function para desplazar la pantalla hacia el contenido
  const scrollToSection = (idParam: string) => {
    const section = document.getElementById(idParam);
    if (section) {
      section.scrollIntoView( {behavior: "smooth", block: "start"} );
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform z-50 
        text-center pt-4 text-white md:px-50 shadow-lg
        ${isScrolled 
            ? "scrolled transform -translate-y-2 bg-gray-800 md:flex justify-between md:py-0 md:pt-6" 
            : ""}`}
    >
        <a id="a-direccion" target="_blank" rel="noopener noreferrer"
            href="https://maps.app.goo.gl/B3EJjabrBhEHz83e8"
            className={`text-gray-200 hover:underline 
                        ${isScrolled ? "md:hidden" : ""}`}
        >   {details.direccion}
        </a>

        <div className="flex justify-center items-center select-none">
            <a 
                onClick={ () => { scrollToSection(componentsNav[0].href_id)} } 
                className="mr-1 md:mr-2 cursor-pointer">
                <img src={logoHeader} className="h-20 md:h-24" />
            </a>

            <div>
                <h1 className={`text-2xl md:text-3xl font-bold`}>
                    {details.nombre}
                </h1>
                <p className="text-xs ">{details.descripcion}</p>
            </div>
            
        </div>

        <div className={`hidden md:flex justify-center items-center text-xs `}>
            {componentsNav.map((item) => (
            <a key={item.text}  onClick={ () => scrollToSection(item.href_id) }
                className={`btn cursor-pointer px-3  ${ !isScrolled ? "py-3 " : "py-2" }`}>
                {item.text}
            </a>
            ))}
            
        </div>

    </header>
  );
}

const componentsNav = [
  {
    href_id: "main-content-container",
    text: "Inicio",
    icon: "",
  },
  {
    href_id: "presentation-container",
    text: "El Estudio",
    icon: "",
  },
  {
    href_id: "servicios-container",
    text: "Areas de Especialización",
    icon: "",
  },
  {
    href_id: "faq-container",
    text: "Preguntas frecuentes",
    icon: "",
  },
  {
    href_id: "contact-sector",
    text: "Contacto",
    icon: "",
  },
];
