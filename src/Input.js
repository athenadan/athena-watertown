import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        id={props.id}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      ></input>
    </div>
  );
}

export default Input;
