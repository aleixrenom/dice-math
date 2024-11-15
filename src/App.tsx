import React from "react";
import "./App.css";
import Equation from "./modules/Equation";
import History from "./modules/History";
import Numpad from "./modules/Numpad";
import { EquationProps, NumbuttonProps } from "./types";

const randomInt = (maxNum: number) => Math.floor(Math.random() * maxNum + 1);

function App() {
  const [firstNum, setFirstNum] = React.useState<number>(0);
  const [secondNum, setSecondNum] = React.useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = React.useState<number>(0);
  const [givenAnswer, setGivenAnswer] = React.useState<number | undefined>(
    undefined
  );

  const resetEquation = () => {
    const first = randomInt(20);
    const second = randomInt(10);
    const answer = first + second;

    setFirstNum(first);
    setSecondNum(second);
    setCorrectAnswer(answer);
    setGivenAnswer(undefined);
  };

  React.useEffect(() => {
    resetEquation();
  }, []);

  const handleNumInput = (num: string) => {
    setGivenAnswer(givenAnswer ? Number(givenAnswer + num) : Number(num));
  };

  const eraseNumber = () => {
    if (givenAnswer) {
      setGivenAnswer(
        givenAnswer > 9 ? Math.floor(givenAnswer / 10) : undefined
      );
    }
  };

  const buttonsPlaceholder: NumbuttonProps[] = [
    { text: "1", onClick: () => handleNumInput("1") },
    { text: "2", onClick: () => handleNumInput("2") },
    { text: "3", onClick: () => handleNumInput("3") },
    { text: "4", onClick: () => handleNumInput("4") },
    { text: "5", onClick: () => handleNumInput("5") },
    { text: "6", onClick: () => handleNumInput("6") },
    { text: "7", onClick: () => handleNumInput("7") },
    { text: "8", onClick: () => handleNumInput("8") },
    { text: "9", onClick: () => handleNumInput("9") },
    { text: "<", onClick: () => eraseNumber() },
    { text: "0", onClick: () => handleNumInput("0") },
    { text: "*", onClick: () => resetEquation() },
  ];

  return (
    <div className="App">
      <History />
      <Equation
        firstNum={firstNum}
        secondNum={secondNum}
        answer={givenAnswer}
      />
      <Numpad buttons={buttonsPlaceholder} />
    </div>
  );
}

export default App;
