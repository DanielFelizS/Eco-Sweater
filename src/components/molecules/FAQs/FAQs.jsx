import { useState } from "react"
import SubHeading from '../../atoms/SubHeading/SubHeading'

export default function FAQs() {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if(selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="faqs" id="faqs">
    <SubHeading>FAQs</SubHeading>
      <div className='wrapper'>
        <div className='accordion'>
          {data.map((item, i)=> (
            <div key={i} className='item'>
              <div className='title' onClick={()=> toggle(i)}>
                <h2>{item.Question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.Answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const data = [{
  Question: "¿Qué es Eco Sweater?",
  Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis."
},
{
  Question: "¿Es gratis?",
  Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis."
},
{
  Question: "¿Cómo funciona?", 
  Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis."
},
{
  Question: "¿Puedo intercambiar ropa con un amigo extranjero?",
  Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis."
},
{
  Question: "¿Cómo puedo saber cuando me llegarán las ropas?", 
  Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis."
},
{
  Question: "¿Y si la ropa no es de mi talla?", 
  Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis."
},
{
  Question: "¿Hay un límite en el intercambio de ropa?", 
  Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat magnam dolorem amet voluptates debitis aliquam vel animi. Sequi asperiores officiis pariatur dolor exercitationem blanditiis."
}
]