'use client';

interface StatsCardProps {
  icon: string;
  label: string;
  value: number | string;
}

export function StatsCard({ icon, label, value }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-900 mb-1">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
