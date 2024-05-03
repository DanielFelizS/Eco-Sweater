import Navbar from "../molecules/Navbar/Navbar";
import Hero from "../molecules/Hero/Hero";
import SectionPage from "../templates/InfoSection/Section";
import Aliance from "../molecules/Colaborators/Aliance";
import FAQs from "../molecules/FAQs/FAQs";
import Card from "../molecules/Card/Card";
import Footer from "../templates/Footer/Footer";

export default function Features() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aliance />
      <SectionPage />
      <FAQs />
      <Card />
      <Footer />
    </>
  );
}
