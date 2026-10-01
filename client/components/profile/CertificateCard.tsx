import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { StudentCertificate } from "@/types/student";
import { formatDate } from "./formatDate";

export function CertificateCard({ certificate }: { certificate: StudentCertificate }) {
  const issueDate = formatDate(certificate.issueDate);

  return (
    <Card as="article" className="flex h-full flex-col border border-graphite/60 bg-abyss/70 p-6">
      <h3 className="text-base font-semibold leading-6 text-bright-gray">{certificate.name}</h3>
      <p className="mt-1 text-sm text-medium-gray">{certificate.issuingOrganization}</p>
      {issueDate ? <p className="mt-3 text-xs text-medium-gray">{issueDate}</p> : null}
      {certificate.credentialId?.trim() ? (
        <p className="mt-2 break-all text-xs text-medium-gray">Credential ID: {certificate.credentialId}</p>
      ) : null}
      {certificate.credentialUrl?.trim() ? (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${certificate.name} credential in a new tab`}
          className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-medium-gray transition-colors hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
        >
          View credential<ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      ) : null}
    </Card>
  );
}
