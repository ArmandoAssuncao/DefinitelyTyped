import { CSSModule } from '../index';

export interface TabPaneProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
  [key: string]: any;
}

declare const TabPane: React.StatelessComponent<TabPaneProps>;
export default TabPane;
