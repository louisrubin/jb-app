import { useEffect, useState } from 'react';
import './MainContent.css';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollThreshold = window.innerHeight * 2.8; // 50% de la altura de la pantalla
        if (window.scrollY > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return(
        <button
            className={`btn-back-to-top fixed bottom-5 right-5 bg-[#cac4a2] text-black lg:text-lg rounded-3xl p-2 px-3 lg:p-3 lg:px-4 transition-opacity duration-300 cursor-pointer
                ${ isVisible ? "opacity-70" : "opacity-0" }`}
            onClick={scrollToTop}
        >
            Volver Arriba
        </button>
    );
}