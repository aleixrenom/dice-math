import Numbutton from "../components/Numbutton";
import { NumbuttonProps } from "../types";

const buttonsPlaceholder: NumbuttonProps[] = [
  { text: "1", onClick: () => console.log("1") },
  { text: "2", onClick: () => console.log("2") },
  { text: "3", onClick: () => console.log("3") },
  { text: "4", onClick: () => console.log("4") },
  { text: "5", onClick: () => console.log("5") },
  { text: "6", onClick: () => console.log("6") },
  { text: "7", onClick: () => console.log("7") },
  { text: "8", onClick: () => console.log("8") },
  { text: "9", onClick: () => console.log("9") },
  { text: "<", onClick: () => console.log("<") },
  { text: "0", onClick: () => console.log("0") },
];

const Numpad = () => {
  return (
    <div className="Numpad-container">
      {buttonsPlaceholder.map((button, i) => (
        <Numbutton key={i} {...button} />
      ))}
    </div>
  );
};

export default Numpad;
