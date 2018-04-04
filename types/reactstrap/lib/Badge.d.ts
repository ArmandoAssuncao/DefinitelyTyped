import { CSSModule } from '../index';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [key: string]: any;
}

declare const Badge: React.StatelessComponent<BadgeProps>;
export default Badge;
