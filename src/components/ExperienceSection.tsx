import experiences from "../constants/experiences";
import Card from "./Card";
import ExternalLink from "./ExternalLink";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-20 lg:mt-40">
      <h2 className="uppercase text-slate-200 font-bold tracking-wider lg:hidden">
        Experiência
      </h2>
      <ul className="group">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="mt-8 hover:opacity-100 group-hover:opacity-50 transition-opacity duration-150 ease-in"
          >
            {exp.href ? (
              <ExternalLink href={exp.href}>
                <Card
                  period={exp.period}
                  title={exp.title}
                  description={exp.description}
                  skills={exp.skills}
                />
              </ExternalLink>
            ) : (
              <Card
                period={exp.period}
                title={exp.title}
                description={exp.description}
                skills={exp.skills}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
