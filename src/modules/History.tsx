import { CompletedEquationProps } from "../types";

const CompletedEquation = ({
  firstNum,
  secondNum,
  answer,
  correct,
}: CompletedEquationProps) => {
  const equationColor = { color: correct ? "green" : "red" };

  return (
    <>
      <span style={equationColor}>
        {firstNum} + {secondNum} = {answer}
      </span>
    </>
  );
};

const historyPlaceholder: CompletedEquationProps[] = [
  { firstNum: 17, secondNum: 2, answer: 19, correct: true },
  { firstNum: 17, secondNum: 2, answer: 23, correct: false },
  { firstNum: 20, secondNum: 10, answer: 30, correct: true },
];

const History = () => {
  return (
    <div className="History-container">
      {historyPlaceholder.map((eq, i) => (
        <CompletedEquation key={i} {...eq} />
      ))}
    </div>
  );
};

export default History;
