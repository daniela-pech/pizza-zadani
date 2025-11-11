import React from "react";
import "./style.css";

interface CheckProps {
  checked: boolean;
  onChange: () => void;
}

const Check = ({ checked, onChange }: CheckProps) => {
  return (
    <button className="check" onClick={onChange}>
      {checked ? "✔" : ""}
    </button>
  );
};

export default Check;
