import Image from "../../atoms/Image/Image"
import SubHeading from "../../atoms/SubHeading/SubHeading"
import Description from "../../atoms/Paragraph/Description"
import Button from "../../atoms/Button/Button"

export default function Section2({Title, Text, ImgUrl, ImgText, BtnOnClick}) {
  return (
    <>
        <section className="section">
            <div className="main">
            <div className="section-description">
            <SubHeading>{Title}</SubHeading>
            <Description>{Text}</Description>
            <Button ButtonClick={BtnOnClick}>Read more</Button>
            </div>
            <Image Url={`${ImgUrl}.jpg`} TextAlt={ImgText} Title={ImgText}/>
            </div>
        </section>
    </>
  )
}
