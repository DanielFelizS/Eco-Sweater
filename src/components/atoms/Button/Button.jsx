
export default function Button({children, ButtonClick}) {
  return (
    <button onClick={ButtonClick}>{children}</button>
  )
}
