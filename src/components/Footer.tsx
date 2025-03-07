import "./Footer.css";
import MapComponent from "./Map";
// import details from "../details";
import SocialFooter from "./SocialFooter";
import DecorationFooter from "./DecorationFooter";

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
			{/* <div id="div-email-address">
				<ul className="text-center h-full ">
					<li className="mb-8">
						<a
						href={`mailto:${details.email}`}
						className="flex justify-center items-center"
						target="_blank"
						>
						<span className="mr-2">
							<svg
							aria-hidden="true"
							className="h-4 "
							fill="white"
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
							>
							<path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
							</svg>
						</span>
						<span>{details.email}</span>
						</a>
					</li>
					<li className="mb-8">
						<a
						href={details.urlMap}
						className="flex justify-center items-center disabled"
						target="_blank"
						rel="noopener noreferrer"
						>
							<span className="mr-2">
								<svg
									aria-hidden="true"
									className="h-4 "
									fill="white"
									viewBox="0 0 384 512"
									xmlns="http://www.w3.org/2000/svg"
									>
									<path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
								</svg>
							</span>
							<span>{details.direccion}</span>
						</a>
					</li>

					<li className="mb-8">
						<div className="w-3/5 mx-auto">
							<a href={`https://wa.me/549${details.telFull}?text=${details.mensajeWhatsApp}`} 
							target="_blank" rel="noopener noreferrer"
							className="flex justify-center items-center"
							>
								<svg aria-hidden="true" className="h-4 mr-2" fill="white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
								<span>AGENDAR UNA CITA</span>
							</a>
						</div>
					</li>

					<li className="mb-8">
						<div className="px-3 w-3/5 mx-auto bg-yellow-700">
							<a href={`tel:+549${details.telFull}`} 
							className="flex justify-center items-center">
								<svg aria-hidden="true" className="h-4 mr-2" fill="white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
								<span>LLAMAR {`${details.telFull}`}</span>
							</a>
						</div>					
						
					</li>

				</ul>
			</div> */}

			<div className="mt-5 md:mt-0 w-4/5 md:w-3/5 mx-auto md:mx-0 ">
				<MapComponent />
			</div>
			
		</div>
      
		<div className="mt-12 w-2/3 mx-auto opacity-50">
			{/* <p className="mb-4 text-xs text-center">Seguinos</p>
			<SocialFooter /> */}
		</div>
	
		
    </div>
  );
}
