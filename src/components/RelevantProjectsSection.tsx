import relevantProjects from "../constants/relevantProjects";
import Card from "./Card";
import ExternalLink from "./ExternalLink";

const RelevantProjectsSection = () => {
  return (
    <>
      <section id="relevant-projects" className="mt-20 lg:mt-40">
        <h2 className="uppercase text-slate-200 font-bold tracking-wider">
          Projetos relevantes
        </h2>
        <ul className="group">
          {relevantProjects.map((proj, index) => (
            <li
              key={index}
              className="mt-8 hover:opacity-100 group-hover:opacity-50 transition-opacity duration-150 ease-in"
            >
              {proj.href ? (
                <ExternalLink href={proj.href}>
                  <Card
                    imageUrl={proj.imageUrl}
                    title={proj.title}
                    description={proj.description}
                  />
                </ExternalLink>
              ) : (
                <Card
                  imageUrl={proj.imageUrl}
                  title={proj.title}
                  description={proj.description}
                />
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default RelevantProjectsSection;
