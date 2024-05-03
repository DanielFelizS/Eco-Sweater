import SubHeading from "../../atoms/SubHeading/SubHeading"
import Description from "../../atoms/Paragraph/Description"
import Button from "../../atoms/Button/Button"

export default function Card() {
  return (
    <div className='card'>
        <SubHeading>Únete a Eco Sweater hoy</SubHeading>
        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Description>
        <Button>Get Started</Button>
    </div>
  )
}
