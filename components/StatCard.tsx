export default function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">{label}</p>
          <h3 className="text-3xl font-bold text-black">{value}</h3>
        </div>
        {icon && (
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white text-xl shrink-0">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
