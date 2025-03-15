import details from "../details";
// import EstatutoAbogacia from "../assets/Estatuto-Abogacía-scaled-reduced.jpg";
import EstatutoAbogacia from "../assets/Estatuto-Abogacia-2.jpg";
import "./MainContent.css";
import ContactButton from "./ContactButton";
import BadgeGoogleReviews from "./BadgeGoogleReviews";

export default function MainContent() {

  return (
    <div
      id="main-content-container"
      className="relative inset-0 h-screen w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${EstatutoAbogacia})`,
        backgroundPositionX: "48%",
        backgroundPositionY: "0%",
        minHeight: "800px",
        // imagen 2:
        // backgroundPositionX: "60%",
        // backgroundPositionY: "5%",
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/40"></div>

      <div
        id="main-content"
        className="relative text-center py-12 pt-38 md:pt-[30%] lg:pt-[25%] xl:pt-[15%]"
        >
          <h1 className="w-3/4 md:w-full lg:w-2/3 mx-auto leading-[1.35] drop-shadow-[3px_3px_4px_rgba(0,0,0,1)]">
            Defendemos Tus Derechos,<br/>Protegemos Tu Futuro
          </h1>

          <p className="especialidad w-3/4 md:w-2/4 lg:w-1/3 mx-auto my-6 md:my-10 drop-shadow-[2px_5px_3px_rgba(0,0,0,1)]">
            {details.especialidad}
          </p>

          <ContactButton>{`${details.telArea}-${details.telNum}`}</ContactButton>

          <div className="flex items-center justify-center gap-10 lg:gap-6 mt-6 lg:mt-8 lg:w-1/3 mx-auto">
            
            <a href={details.instagram_URL} className="p-2 bg-gray-900 rounded-full" target="_blank" rel="noopener noreferrer">
              <span>
                <svg className="h-10 w-10 lg:h-8 lg:w-8" fill="#cac4a2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg> 
              </span>
            </a>

            <a href={details.facebook_URL} className="p-2 bg-gray-900 rounded-full" target="_blank" rel="noopener noreferrer">
              <span>
                <svg className="h-10 w-10 lg:h-8 lg:w-8" fill="#cac4a2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg> 
              </span>
            </a>
          </div>


          <div className="flex justify-center w-full mt-8 md:mt-20 lg:mt-15 ">
                <BadgeGoogleReviews theme="dark" />
          </div>
      </div>
    </div>
  );
}
