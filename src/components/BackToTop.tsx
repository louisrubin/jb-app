import { useEffect, useState } from 'react';
import './MainContent.css';
import arrowUp from '../assets/arrow-up.png';

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
            className={`btn-back-to-top fixed bottom-5 right-5 transition-opacity duration-300 cursor-pointer
                ${ isVisible ? "opacity-70" : "opacity-0" }`}
            onClick={scrollToTop}
        >
            <img src={arrowUp} className='h-10 lg:h-13' />
        </button>
    );
}