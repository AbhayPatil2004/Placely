type ProfileFieldProps = {
  label: string;
  value?: string | number | null;
  fallback?: string;
};

export function ProfileField({ label, value, fallback = "Not added" }: ProfileFieldProps) {
  const displayValue = value === undefined || value === null || value === "" ? fallback : value;

  return (
    <div className="space-y-1.5 rounded-xl border border-graphite bg-[#171717] p-3">
      <dt className="text-[10px] uppercase tracking-[0.12em] text-muted-gray">{label}</dt>
      <dd className="break-words text-sm text-white">{displayValue}</dd>
    </div>
  );
}
