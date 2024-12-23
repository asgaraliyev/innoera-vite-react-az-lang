import React from 'react';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a
    href={href}
    className="text-gray-500 hover:text-blue-600 transition-colors"
  >
    {children}
  </a>
);

export default FooterLink;