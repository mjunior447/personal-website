import relevantProjects from "../constants/relevantProjects";
import Card from "./Card";

const RelevantProjectsSection = () => {
  return (
    <section id="relevant-projects" className="mt-40">
      <ul className="group">
        {relevantProjects.map((proj, index) => (
          <li
            key={index}
            className="mt-8 hover:opacity-100 group-hover:opacity-50 transition-opacity duration-300 ease-in"
          >
            <Card
              imageUrl={proj.imageUrl}
              title={proj.title}
              description={proj.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelevantProjectsSection;
