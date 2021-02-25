import { LayoutProps } from './types';
import { Presentational } from './Presentational';

export const Layout = ({ children }: LayoutProps) => {
  return <Presentational children={children} />;
};
