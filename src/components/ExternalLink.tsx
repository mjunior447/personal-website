import { PropsWithChildren } from "react";

interface ExternalLinkProps {
  href: string;
}

const ExternalLink = ({
  href,
  children,
}: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-slate-200/80 hover:text-blue-400 transition-colors duration-100 ease-in"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
