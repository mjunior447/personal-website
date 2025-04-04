import { links } from "../constants/links";
import ExternalLink from "./ExternalLink";

const FooterInfoSection = () => {
  return (
    <section className="mt-20 lg:mt-40 text-slate-200/60 text-sm">
      <p>
        Design baseado no site da talentosa{" "}
        <ExternalLink
          href={links.brittanyChiang}
          classNames="text-blue-400 hover:underline"
        >
          Brittany Chiang
        </ExternalLink>
        . Feito com Next.js e Tailwind CSS.
      </p>
    </section>
  );
};

export default FooterInfoSection;
