import "./Footer.css";
import MapComponent from "./Map";
// import details from "../details";
// import SocialFooter from "./SocialFooter";
import DecorationFooter from "./DecorationFooter";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <div className="pt-2 pb-8 md:px-30">
		
		<DecorationFooter />

		<p id="p-footer-frase" className="text-center  md:px-10 w-4/5 md:w-3/5 mx-auto uppercase">
			Te ofrecemos el apoyo legal que necesitas con una
			atención personalizada y un equipo de trabajo capacitado para
			encontrar la mejor solución.
		</p>

		<div className=" md:w-4/5 mx-auto md:flex md:justify-evenly mt-12">
			<div className="mt-5 md:mt-0 w-4/5 md:w-3/5 mx-auto md:mx-0 ">
				<MapComponent />
			</div>			
		</div>
      
		<div className="text-xs underline mt-12 pb-10 lg:pb-0 text-center w-2/3 mx-auto opacity-50">
			<a href="https://github.com/louisrubin/" target="_blank" rel="noopener noreferrer">
				Desarrollado por Luis Rubin Azas 
			</a>
		</div>
	
		<BackToTop />
    </div>
  );
}
