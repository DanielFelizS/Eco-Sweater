import SubHeading from "../../atoms/SubHeading/SubHeading"
import Description from "../../atoms/Paragraph/Description"
import Button from "../../atoms/Button/Button"

export default function Card() {
  return (
    <div className='card'>
        <SubHeading>Únete a Eco Sweater hoy</SubHeading>
        <Description>El camino ecológico al estilo.</Description>
        <Button>Get Started</Button>
    </div>
  )
}
