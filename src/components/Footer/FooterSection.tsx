import React from 'react';

type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
};

const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-3">
      {children}
    </ul>
  </div>
);

export default FooterSection;