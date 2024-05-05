import { useState } from "react";
import toTitleCase from "@/utils/toTitleCase";

export default function Checkbox({ name = "interest", value, onChange }) {
  const [checked, setChecked] = useState(false);

  // function handleCheckboxChange(event) {
  //   const selectedInterests = Array.from(
  //     document.querySelectorAll(`input[name=${name}]:checked`)
  //   ).map((checkbox) => checkbox.value);
  // }
  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(value, isChecked);
  }
  return (
    <label className="checkbox-button">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {checked ? "+ " : "- "}
      {toTitleCase(value)}
    </label>
  );
}
