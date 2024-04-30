import React from 'react';
import NavBar from '../components/NavBar/NavBar';

export default function Page(
  children: Element,
) {
  return (
    <div className="page">
      <NavBar />
      {children}
    </div>
  )
};
