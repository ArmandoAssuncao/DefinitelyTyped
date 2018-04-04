import { CSSModule } from '../index';

export interface InputGroupProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  size?: string;
  className?: string;
  cssModule?: CSSModule;
  [key: string]: any;
}

declare const InputGroup: React.StatelessComponent<InputGroupProps>;
export default InputGroup;
