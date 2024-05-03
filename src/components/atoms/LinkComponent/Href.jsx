// import { Link } from 'react-router-dom'

export default function Href({url, children}) {
  return (
    <a href={url}>{children}</a>
  )
}
