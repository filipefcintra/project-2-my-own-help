import React from "react";

export default function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}
