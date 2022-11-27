import { FC, PropsWithChildren } from 'react';
import { Link as RRDLink } from 'react-router-dom';
import cl from './styles.module.scss';

interface ILinkProps extends PropsWithChildren {
  background?: string
  color?: string
  path: string
}

export const Link: FC<ILinkProps> = ({ children, background, color, path }) => {
  return (
    <RRDLink to={path} className={cl.link} style={{ color, background }}>
      {children}
    </RRDLink>
  );
};

export default Link;
