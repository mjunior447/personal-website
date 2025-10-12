import { useTranslations } from "next-intl";
import { links } from "../constants/links";
import ExternalLink from "./ExternalLink";

const FooterInfoSection = () => {
  const t = useTranslations("footer");

  return (
    <section className="mt-20 lg:mt-40 text-slate-200/60 text-sm">
      <p>
        {t("p1.1")}{" "}
        <ExternalLink
          href={links.brittanyChiang}
          classNames="text-blue-400 hover:underline"
        >
          Brittany Chiang
        </ExternalLink>
        {t("p1.2")}
      </p>
    </section>
  );
};

export default FooterInfoSection;
