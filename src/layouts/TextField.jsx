import React from "react";
import { checkPropTypes, string } from "prop-types";

const TextField = ({ type, label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        className="border-2"
        type={type}
        id={name}
        name={name}
        value={value}
      />
    </div>
  );
};
TextField.prototype={
    label: checkPropTypes
}
export default TextField;
