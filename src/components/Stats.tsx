import React from 'react';
import { Calendar, Shield, Users } from 'lucide-react';

const stats = [
  {
    label: 'Bu ay bitən layihələr',
    value: '06',
    icon: Calendar,
  },
  {
    label: 'Quraşdırılmış məhsullar',
    value: '238',
    icon: Shield,
  },
  {
    label: 'Məmnun müştərilər',
    value: '1,395',
    icon: Users,
  },
];

const Stats = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl"
            >
              <Icon className="h-8 w-8 text-blue-600 mb-4" />
              <span className="text-4xl font-bold text-gray-900 mb-2">{value}</span>
              <span className="text-gray-600 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Stats