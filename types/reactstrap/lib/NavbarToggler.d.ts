import { CSSModule } from '../index';

export interface NavbarTogglerProps extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  type?: string;
  className?: string;
  cssModule?: CSSModule;
  [key: string]: any;
}

declare const NavbarToggler: React.StatelessComponent<NavbarTogglerProps>;
export default NavbarToggler;
