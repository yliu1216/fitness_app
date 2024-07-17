import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="mt-4 grow bottom-0 w-full text-center" style={{ textAlign: 'center' }}>
      <p>&copy;{year}</p>
    </div>
  );
};

export default Footer;