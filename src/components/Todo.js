import React from "react"

const Item = (props) => {
  const handleClick = () => {
    props.handleToggle(props.item.id)
  }

  return (
    <div
      onClick={handleClick}
      className={`item${props.item.finished ? " finished" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  )
}

export default Item
