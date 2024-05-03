import Image from "../../atoms/Image/Image";
import SubHeading from "../../atoms/SubHeading/SubHeading";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <SubHeading>Contáctanos</SubHeading>
      <section className="contact">
        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Jhon Doe" required />
            <input type="email" placeholder="jhondoe@correo.com" required />
            <input type="text" placeholder="Asunto" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
            ></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className="contact-img">
          <Image
            Url="ecoSweater.jpg"
            TextAlt="Imagen de dos chicas modelos"
            Title=""
          />
        </div>
      </section>
    </div>
  );
}
