export default function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white text-black p-5 rounded shadow">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}
