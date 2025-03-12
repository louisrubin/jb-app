import ContactSector from "./ContactSector";
import FAQComponent from "./FAQComponent";
import MainContent from "./MainContent";
import ElEstudio from "./ElEstudio";
import Servicios from "./Servicios";
import ServiciosFooter from "./ServiciosFooter";
import GoogleReviewsAPI from "./GoogleReviewsAPI";

export default function Main() {
  return (
    <>
      <MainContent />
      <ElEstudio />
      <Servicios />
      <ServiciosFooter />
      <FAQComponent />
      <ContactSector />
      <GoogleReviewsAPI />
    </>
  );
}
