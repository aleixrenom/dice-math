export interface NumbuttonProps {
  text: string;
  onClick?: () => void;
}

export interface EquationProps {
  firstNum?: number;
  secondNum?: number;
  answer?: number;
}

export interface CompletedEquationProps {
  firstNum: number;
  secondNum: number;
  answer: number;
  correct: boolean;
}
