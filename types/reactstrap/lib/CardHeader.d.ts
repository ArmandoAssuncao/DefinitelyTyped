import { CSSModule } from '../index';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [key: string]: any;
}

declare const CardHeader: React.StatelessComponent<CardHeaderProps>;
export default CardHeader;
