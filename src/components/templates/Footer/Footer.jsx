import Href from "../../atoms/LinkComponent/Href";
import SubHeading from "../../atoms/SubHeading/SubHeading"
import Description from "../../atoms/Paragraph/Description";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='footer'>
      <SubHeading>Eco Sweater</SubHeading>
      <Description>Síguenos</Description>
      <div className="social-links">
        <BsInstagram className="icons instagram"/>
        <FaYoutube className="icons youtube"/>
        <FaTwitter className="icons twitter"/>
      </div>

      <div className="footer-link">
        <div className="links-product">
          <Description>Lo que hacemos</Description>
          <ul>
            <li><Href url={'/'}>Features</Href></li>
            <li><Href url={'/services'}>Services</Href></li>
          </ul>
        </div>

        <div className="link-about">
        <Description>Nosotros</Description>
          <ul>
            <li><Href url={'/about'}>About</Href></li>
          </ul>
        </div>
        
        <div className="links-help">
          <Description>¿Necesitas ayuda?</Description>
          <ul>
            <li><Href url={'/faqs'}>Preguntas frecuentes</Href></li>
            <li><Href url={'/contact'}>Contáctanos</Href></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
      <Description>2024 © Eco Sweater todos los derechos están reservados</Description>
      </div>
  </footer>
  )
}
