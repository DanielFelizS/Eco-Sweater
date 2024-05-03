import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";
import Description from "../../atoms/Paragraph/Description";
import Button from "../../atoms/Button/Button";
// import { BsInstagram } from "react-icons/bs";
// import { FaYoutube, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <Heading>Eco Sweater</Heading>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            suscipit eum ratione libero, facilis laudantium reprehenderit ea
            asperiores, illum voluptatum optio. Repellat ducimus sint ipsam,
            enim magnam tempore eum quisquam.
          </Description>
          <Button ButtonClick={() => alert("Hola soy un boton")}>
            Click Me
          </Button>
          <Button ButtonClick={() => alert("Hola soy un boton")}>
            Learn More
          </Button>
          {/* <div className="social-media">
            <BsInstagram className="icons"/>
            <FaYoutube className="icons"/>
            <FaTwitter className="icons"/>
          </div> */}
        </div>
      </div>
      <div className="hero-imagen">
        <Image Url="ecoSweater.jpg" TextAlt="Eco Sweater" Title="Eco Sweater" />
      </div>
    </>
  );
}
