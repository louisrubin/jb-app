import ContactSector from "./ContactSector";
import FAQComponent from "./FAQComponent";
import MainContent from "./MainContent";
import Servicios from "./Servicios";
import ServiciosFooter from "./ServiciosFooter";

export default function Main() {
  return (
    <>
      <MainContent />
      <Servicios />
      <ServiciosFooter />
      <FAQComponent />
      <ContactSector />
    </>
  );
}
