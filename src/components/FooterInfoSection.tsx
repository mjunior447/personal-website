import ExternalLink from "./ExternalLink";

const FooterInfoSection = () => {
  return (
    <section className="mt-20 lg:mt-40 text-slate-200/40 text-sm">
      <p>
        Design baseado no site da talentosa{" "}
        <ExternalLink href="https://brittanychiang.com/">
          Brittany Chiang
        </ExternalLink>
        . Feito com Next.js e Tailwind CSS.
      </p>
    </section>
  );
};

export default FooterInfoSection;
