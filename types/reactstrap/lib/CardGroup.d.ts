import { CSSModule } from '../index';

export interface CardGroupProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [key: string]: any;
}

declare const CardGroup: React.StatelessComponent<CardGroupProps>;
export default CardGroup;
