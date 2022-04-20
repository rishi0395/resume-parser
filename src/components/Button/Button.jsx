import React from "react";
import './Button.css'
export default function Button(props) {
  const { onClick, title } = props;
  return (
    <button onClick={onClick} {...props}>
      {title}
    </button>
  );
}
