import Check from "../Check";
import type { ITopping } from "../../models/Topping";
import "./style.css";

interface IToppingProps {
  topping: ITopping;
  onToggle: () => void;
}

const Topping = ({ topping, onToggle }: IToppingProps) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onToggle} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
