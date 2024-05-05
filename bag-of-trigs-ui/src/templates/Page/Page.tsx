import NavBar from '../../components/NavBar/NavBar';
import { PropsWithChildren, ReactNode } from 'react';

import './_styles.scss';

export default function Page({ children }: PropsWithChildren<{children: ReactNode}>) {
  return (
    <div className="page-wrap">
      <NavBar />
      <div className="page-content">
        {children}
      </div>
    </div>
  )
};
