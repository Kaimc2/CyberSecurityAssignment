import { SetStateAction, useState } from "react";

export default function TextInput({ type = "text", label = "", name = "" }) {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState("");
  
    function handleChange(text: SetStateAction<string>) {
      setValue(text);
  
      if (text !== "") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  
    return (
      <div className="input-container">
        <input
          type={type}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <label className={isActive ? "Active" : ""} htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }