import { Presentational } from './Presentational';
import { ContentProps } from './types';

export const Content = ({ children }: ContentProps) => {
  return <Presentational children={children} />;
};
