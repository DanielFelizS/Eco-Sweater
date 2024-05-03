import Section from "../../molecules/Section/Section"
import Section2 from "../../molecules/Section/Section2"
import SubHeading from "../../atoms/SubHeading/SubHeading"

export default function SectionPage() {
  return (
    <div id="about">
      <SubHeading>About Us</SubHeading>
     <Section Title="Tienda de ropa en línea" ImgUrl="abrigos" ImgText= 'Abrigos de trigo' Text= "Tienda de prendas producidas con materiales eco-friendly." BtnOnClick = {()=> alert("EL mejor de 6to de informática creando landing page")}/>
      
      <Section Title="Intercambia tu ropa desde cualquier parte del mundo" ImgUrl="closet-ordenado" ImgText= 'Closet con ropa' Text= "Intercambio de textiles nuevos o usados con un simulador del cuerpo utilizando IA." BtnOnClick = {()=> alert("EL mejor de 6to de informática creando landing page")}/>

      <Section2 Title="Donaciones benéficas" ImgUrl="donar-ropa" ImgText= 'Donacion de abrigos' Text= "A través de nuestra plataforma puedes donar prendas usadas a personas de bajos recursos." BtnOnClick = {()=> alert("EL mejor de 6to de informática creando landing page")}/>

      <Section Title="Ayudar al medio ambiente" ImgUrl="contaminacion-ropa" ImgText= 'Contaminación ambiental de ropa' Text= "Ayuda al medio ambiente reduciendo la huella de carbono y fomentando la economía circular." BtnOnClick = {()=> alert("EL mejor de 6to de informática creando landing page")}/>

      {/* <Section2 Title="Simulación del cuerpo con IA" ImgUrl="mujer-paris" ImgText= 'Donacion de abrigos' Text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis." BtnOnClick = {()=> alert("EL mejor de 6to de informática creando landing page")}/> */}
    </div>
  )
}
