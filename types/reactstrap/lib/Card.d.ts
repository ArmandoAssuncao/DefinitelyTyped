import { CSSModule } from '../index';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  block?: boolean;
  body?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: React.CSSProperties;
  [key: string]: any;
}

declare const Card: React.StatelessComponent<CardProps>;
export default Card;
