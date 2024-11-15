import Numbutton from "../components/Numbutton";
import { NumbuttonProps } from "../types";

const Numpad = ({ buttons }: { buttons: NumbuttonProps[] }) => {
  return (
    <div className="Numpad-container">
      {buttons.map((button, i) => (
        <Numbutton key={i} {...button} />
      ))}
    </div>
  );
};

export default Numpad;
