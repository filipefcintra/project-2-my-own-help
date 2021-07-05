import React from "react";
<<<<<<< HEAD
=======

>>>>>>> ae296e0224e6ff49ae3154d054efc169364de636
export default function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
