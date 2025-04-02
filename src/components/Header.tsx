import { useEffect, useState } from "react";
import "./Header.css";
import logoHeader from "../assets/JB-light.png";
// import menuLogo from "../assets/menu-icon2.png";
import details from "../details";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [modoHorizontal, setModoHorizontal] = useState(false);
    let lastScrollY = 0;

    // si volteo en modo horizontal el cel oculta el header al bajar
    useEffect( () => {
        const handleHorizontal = () => {
            const scrollY = window.scrollY;
            const modoHorizontal = window.matchMedia("(orientation: landscape)").matches;
        
            if (modoHorizontal && (screen.height < 720)) {
                setModoHorizontal(true);    // set modo horizontal

                if (scrollY > lastScrollY ) {
                    setHidden(true);    // ocultar
                } else {
                    setHidden(false);   // mostrar al subir
                }
            } else {
                setModoHorizontal(false);    // set modo horizontal
                setHidden(false); // siempre visible
            }

            lastScrollY = scrollY;
        }

        handleHorizontal();

        window.addEventListener("scroll", handleHorizontal);
        return () => window.removeEventListener("scroll", handleHorizontal);
    }, [] )
    
    useEffect(() => {
        // verifica si bajó para modificar el Header
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
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform z-50 
        text-center text-white pt-1 xl:px-[10%] shadow-lg
        ${
          isScrolled
            ? "scrolled transform -translate-y-2 bg-gray-800 xl:flex justify-between "
            : ""
        }
        ${
            hidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <a
        id="a-direccion"
        target="_blank"
        rel="noopener noreferrer"
        href={details.urlMap}
        className={`text-gray-200 hover:underline 
                        ${isScrolled ? "xl:hidden" : ""}
                        ${modoHorizontal ? "hidden" : ""}`}
      >
        {" "}
        {details.direccion}
      </a>

      <div className="flex justify-center items-center select-none">
        <a
          onClick={() => {
            scrollToSection(componentsNav[0].href_id);
          }}
          className="mr-1 md:mr-2 cursor-pointer"
        >
          <img src={logoHeader} className="w-20 h-20 xl:h-25 xl:w-25" />
        </a>

        <div>
          <h1
            className={`h1-jb-estudio text-white font-bold text-2xl lg:text-3xl`}
          >
            {details.nombre}
          </h1>
          <p className="text-xs ">{details.descripcion}</p>
        </div>
      </div>

      <div className={`hidden xl:flex justify-center items-center text-xs `}>
        {componentsNav.map((item) => (
          <a
            key={item.text}
            onClick={() => scrollToSection(item.href_id)}
            className={`btn cursor-pointer px-3  ${
              !isScrolled ? "py-3 " : "py-2"
            }`}
          >
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
