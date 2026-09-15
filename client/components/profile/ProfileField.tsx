type ProfileFieldProps = {
  label: string;
  value?: string | number;
};

export function ProfileField({ label, value }: ProfileFieldProps) {
  if (value === undefined || value === null || value === "") return null;

  return (
    <div className="space-y-1">
      <dt className="text-xs text-muted-gray">{label}</dt>
      <dd className="break-words text-sm text-white">{value}</dd>
    </div>
  );
}
