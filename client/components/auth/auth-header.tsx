import Link from "next/link";

type AuthHeaderProps = {
  title: string;
  description: string;
  alternateText?: string;
  alternateLabel?: string;
  alternateHref?: string;
};

export function AuthHeader({
  title,
  description,
  alternateText,
  alternateLabel,
  alternateHref,
}: AuthHeaderProps) {
  return (
    <header className="space-y-2 text-center">
      <h1 className="text-heading font-semibold tracking-[-0.56px] text-bright-gray">
        {title}
      </h1>
      <p className="text-body-sm text-medium-gray">{description}</p>
      {alternateText && alternateLabel && alternateHref ? (
        <p className="pt-1 text-body-sm text-muted-gray">
          {alternateText}{" "}
          <Link
            href={alternateHref}
            className="font-medium text-medium-gray hover:text-white"
          >
            {alternateLabel}
          </Link>
        </p>
      ) : null}
    </header>
  );
}
