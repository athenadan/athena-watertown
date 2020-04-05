import React from "react";
import PropTypes from "prop-types";

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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "number", "password"]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: "text"
};

export default Input;
