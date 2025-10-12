import { useTranslations } from "next-intl";
import { links } from "../constants/links";
import ExternalLink from "./ExternalLink";

const AboutSection = () => {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="text-md md:text-md text-zinc-400 tracking-wide leading-6"
    >
      <h2 className="uppercase text-slate-200 font-bold tracking-wider mb-4">
        {t("title")}
      </h2>
      <p className="mb-4">{t("p1")}</p>

      <p className="mb-4">
        {t("p2.1")}{" "}
        <ExternalLink
          href={links.companies.easy2life}
          classNames="text-blue-400 hover:underline"
        >
          Easy2Life
        </ExternalLink>{" "}
        {t("p2.2")}{" "}
        <ExternalLink
          href={links.companies.sulamerica}
          classNames="text-blue-400 hover:underline"
        >
          SulAmérica
        </ExternalLink>
        {t("p2.3")}
      </p>

      <p className="mb-4">
        {t("p3.1")}{" "}
        <ExternalLink
          href={links.companies.hechoPorNosotros}
          classNames="text-blue-400 hover:underline"
        >
          {t("p3.2")}
        </ExternalLink>{" "}
        {t("p3.3")}{" "}
        <ExternalLink
          href={links.companies.expertoAnimal}
          classNames="text-blue-400 hover:underline"
        >
          {t("p3.4")}
        </ExternalLink>
        {t("p3.5")}
        <ExternalLink
          href={links.projects.bookTranslation}
          classNames="text-blue-400 hover:underline"
        >
          {" "}
          {t("p3.6")}
        </ExternalLink>{" "}
        {t("p3.7")}
      </p>

      <p className="mb-4">{t("p4")}</p>
    </section>
  );
};

export default AboutSection;
