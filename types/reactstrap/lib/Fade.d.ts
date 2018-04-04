import { CSSModule } from '../index';

export interface FadeProps extends React.HTMLAttributes<HTMLElement> {
  in?: boolean;
  baseClass?: string;
  baseClassIn?: string;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
  transitionAppear?: boolean;
  transitionEnter?: boolean;
  transitionLeave?: boolean;
  onLeave?: () => void;
  onEnter?: () => void;
  [key: string]: any;
}

declare const Fade: React.StatelessComponent<FadeProps>;
export default Fade;
