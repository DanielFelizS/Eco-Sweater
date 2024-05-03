import Navbar from "../molecules/Navbar/Navbar";
import Image from "../atoms/Image/Image";
import Footer from "../templates/Footer/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contact-form">
          <h1>Contáctanos</h1>
          <p></p>
          <form action="">
            <input type="text" placeholder="Jhon Doe" required/>
            <input type="email" placeholder="jhondoe@correo.com" required/>
            <input type="text" placeholder="Asunto"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje">

            </textarea>
            <input type="submit" value='Enviar'/>
          </form>
        </div>
        <div className="contact-img">
          <Image Url='ecoSweater.jpg' TextAlt='Imagen de dos chicas modelos' Title=''/>
        </div>
      </section>
      <Footer/>
    </>
  );
}
