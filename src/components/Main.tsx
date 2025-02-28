import ContactSector from "./ContactSector";
import MainContent from "./MainContent";
import Servicios from "./Servicios";
import ServiciosFooter from "./ServiciosFooter";

export default function Main() {
  return (
    <>
      <MainContent />
      <Servicios />
        <ServiciosFooter />
      <ContactSector />
    </>
  );
}
