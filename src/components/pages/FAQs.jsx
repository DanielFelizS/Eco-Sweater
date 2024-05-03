import Navbar from "../molecules/Navbar/Navbar";
import FAQs from "../molecules/FAQs/FAQs";
import Heading from "../atoms/Heading/Heading";
import Footer from "../templates/Footer/Footer";

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <Heading>FAQs</Heading>
      <FAQs/>
      <Footer/>
    </>
  );
}
