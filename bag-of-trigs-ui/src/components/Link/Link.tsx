import './_styles.scss';
import { PropsWithChildren, ReactNode } from 'react';

export default function Link({
  href,
  children
}: PropsWithChildren<{
  href: string,
  children: ReactNode
}>) {
  return (
    <a
      className="link"
      href={href}
    >
      {children}
    </a>
  )
};
