import details from "../details";
// import EstatutoAbogacia from "../assets/Estatuto-Abogacía-scaled-reduced.jpg";
import EstatutoAbogacia from "../assets/Estatuto-Abogacia-2.jpg";
import "./MainContent.css";
import ContactButton from "./ContactButton";

export default function MainContent() {

  return (
    <div
      id="main-content-container"
      className="relative inset-0 h-screen w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${EstatutoAbogacia})`,
        backgroundPositionX: "60%",
        backgroundPositionY: "5%",
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/40"></div>

      <div
        id="main-content"
        className="relative text-white text-center py-12 pt-50 md:pt-90"
      >
        <h1 className="text-5xl font-bold w-3/4 md:w-2/3 mx-auto text-left md:text-center leading-[1.25]">
          Defendemos Tus Derechos,<br/>Protegemos Tu Futuro
        </h1>

        <p className="w-2/3 md:w-1/3 mx-auto my-10 ">
          {details.especialidad}
        </p>

        <ContactButton>Contáctanos</ContactButton>

      </div>
    </div>
  );
}
