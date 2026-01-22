export default function SectionCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 card-hover">
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-200">
        {icon && <span className="text-2xl shrink-0">{icon}</span>}
        <h3 className="text-xl font-bold text-black">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}
