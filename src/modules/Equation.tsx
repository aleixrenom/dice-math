import { ReactNode } from "react";

interface EquationProps {
  firstNum?: number;
  secondNum?: number;
  answer?: number;
}

const Member = ({ children }: { children: ReactNode }) => (
  <span style={{ margin: "0px 10px" }}>{children}</span>
);

const Equation = ({ firstNum, secondNum, answer }: EquationProps) => {
  return (
    <div className="Equation-container">
      {firstNum ? <Member>{firstNum}</Member> : <Member>??</Member>}
      <Member>+</Member>
      {secondNum ? <Member>{secondNum}</Member> : <Member>??</Member>}
      <Member>=</Member>
      {answer ? <Member>{answer}</Member> : <Member>_</Member>}
    </div>
  );
};

export default Equation;
