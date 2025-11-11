import React, { useState } from "react";
import type { ITopping } from "../../models/Topping";
import Topping from "../Topping";
import "./style.css";

interface IToppingsSelectProps {
  toppings: ITopping[];
}

const ToppingsSelect = ({ toppings }: IToppingsSelectProps) => {
  const [localToppings, setLocalToppings] = useState<ITopping[]>(toppings);

  const handleToggle = (name: string) => {
    setLocalToppings((prev) =>
      prev.map((t) => (t.name === name ? { ...t, selected: !t.selected } : t)),
    );
  };

  const selectedCount = localToppings.filter((t) => t.selected).length;
  const totalPrice = localToppings
    .filter((t) => t.selected)
    .reduce((sum, t) => sum + t.price, 0);

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedCount}, total price: {totalPrice.toFixed(2)}{" "}
        Euro
      </p>

      <div className="toppings">
        {localToppings.map((topping) => (
          <Topping
            topping={topping}
            key={topping.name}
            onToggle={() => handleToggle(topping.name)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
