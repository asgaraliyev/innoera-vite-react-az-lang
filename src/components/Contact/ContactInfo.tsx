import React from 'react';

type ContactInfoProps = {
  icon: React.ElementType;
  title: string;
  content: string;
};

const ContactInfo = ({ icon: Icon, title, content }: ContactInfoProps) => (
  <div className="flex items-start space-x-4">
    <div className="bg-blue-100 p-3 rounded-lg">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactInfo;