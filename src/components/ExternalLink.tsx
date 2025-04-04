import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ExternalLinkProps {
  href: string;
  classNames?: string;
}

const ExternalLink = ({
  href,
  classNames,
  children,
}: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "text-slate-200/80 transition-colors duration-100 ease-in",
        classNames
      )}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
