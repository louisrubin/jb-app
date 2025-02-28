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
      section.scrollIntoView( {behavior: "smooth", block: "center"} );
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
                <h1 className={`md:text-3xl font-bold text-3xl `}>
                    {details.nombre}
                </h1>
                <p className="text-xs ">{details.descripcion}</p>
            </div>
            
        </div>

        <div className={`hidden md:flex justify-center items-center text-xs `}>
            {componentsNav.map((item) => (
            <a key={item.text}  onClick={ () => scrollToSection(item.href_id) }
                className={`btn cursor-pointer ${!isScrolled ? " px-5 py-3 " : "px-3 py-1" }`}>
                {item.text}
            </a>
            ))}
            
        </div>

        {/* OPCIONES EN MOVILE */}

        {/* Mobile Menu Button */}
        {/* <div className="flex justify-end md:hidden pr-6">
            <button
            className="text-gray-700 dark:text-gray-200 "
            onClick={toggleMenu}
            >
            {menuMovile ? (
                <img src={menuLogo} className="h-8" />
            ) : (
                <img src={menuLogo} className="h-8 -rotate-90" />
            )}
            </button>
        </div>

        {menuMovile && (
            <ul
            className={`overflow-hidden transition-all duration-700 max-h-0 ${
                menuMovile ? "max-h-96" : ""
            }`}
            >
            {componentsNav.map((item) => (
                <li className="my-4 uppercase mx-22 text-2xl bg-gray-900 hover:text-yellow-500">
                <a key={item.text} href={item.href} className="btn-2">
                    {item.text}
                </a>
                </li>
            ))}
            </ul>
        )} */}
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
    href_id: "servicios-container",
    text: "Servicios",
    icon: "",
  },
  {
    href_id: "#",
    text: "Nosotros",
    icon: "",
  },
  {
    href_id: "#",
    text: "Preguntas",
    icon: "",
  },
  {
    href_id: "contact-sector",
    text: "Contacto",
    icon: "",
  },
];
