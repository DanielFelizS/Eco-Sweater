import Href from "../../atoms/LinkComponent/Href";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Href url={"/"}>Home</Href>
        </li>
        <li>
          <Href url={"#about"}>About</Href>
        </li>
        <li>
          <Href url={"#faqs"}>FAQs</Href>
        </li>
        <li>
          <Href url={"#contact"}>Contact</Href>
        </li>
      </ul>
    </nav>
  );
}
