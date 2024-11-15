import { NumbuttonProps } from "../types";

const Numbutton = ({ text, onClick }: NumbuttonProps) => {
  return (
    <>
      <button className="Numpad-button" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Numbutton;
