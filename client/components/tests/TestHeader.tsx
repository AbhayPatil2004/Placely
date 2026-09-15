type TestHeaderProps = {
  title: string;
  description: string;
};

export function TestHeader({ title, description }: TestHeaderProps) {
  return (
    <header className="space-y-3 border-b border-graphite pb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-gray">
        Test mode
      </p>
      <h1 className="text-heading font-semibold tracking-[-0.56px] text-white">
        {title}
      </h1>
      <p className="max-w-2xl text-sm leading-6 text-medium-gray">{description}</p>
    </header>
  );
}
