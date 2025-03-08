import experiences from "../constants/experiences";
import Card from "./Card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-40">
      <ul className="group">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="mt-8 hover:opacity-100 group-hover:opacity-50 transition-opacity duration-300 ease-in"
          >
            <Card
              period={exp.period}
              title={exp.title}
              description={exp.description}
              skills={exp.skills}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
