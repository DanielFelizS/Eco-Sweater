
export default function Image({Url, TextAlt, Title}) {
  return (
    <img src={`/img/${Url}`} alt={TextAlt} title={Title}/>
  )
}
