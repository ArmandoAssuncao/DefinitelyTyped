import { CSSModule } from '../index';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  right?: boolean;
  className?: string;
  cssModule?: CSSModule;
  flip?: boolean;
  [key: string]: any;
}

declare const DropdownMenu: React.StatelessComponent<DropdownMenuProps>;
export default DropdownMenu;
