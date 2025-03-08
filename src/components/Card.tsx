import Badge from "./Badge";

interface CardProps {
  period: string;
  title: string;
  description: string;
  skills: Array<string>;
}

const Card = ({ period, title, description, skills }: CardProps) => {
  return (
    <div className="flex gap-2 md:gap-12 lg:gap-16 flex-col md:flex-row w-full text-zinc-400 rounded-md p-5 cursor-pointer hover:[&_h3]:text-blue-400 shadow-lg shadow-sky-300/10 transition-all hover:shadow-lg hover:shadow-sky-300 duration-300 ease-in">
      <div className="min-w-fit text-xs md:text-sm">{period}</div>
      <div className="flex flex-col gap-3">
        <h3 className="text-md font-bold text-zinc-300 transition-all duration-300 ease-in-out">{title}</h3>
        <div className="text-sm">{description}</div>
        <ul className="flex gap-1 text-sm flex-wrap">
          {skills.map((skill, index) => (
            <li key={index}>
              <Badge content={skill} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
