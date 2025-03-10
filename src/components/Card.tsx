import Image from "next/image";
import Badge from "./Badge";

interface CardProps {
  title: string;
  description: string;
  period?: string;
  imageUrl?: string;
  skills?: Array<string>;
}

const Card = ({ period, title, description, skills, imageUrl }: CardProps) => {
  return (
    <div className="flex gap-2 md:gap-12 lg:gap-16 flex-col md:flex-row w-full text-zinc-400 rounded-md p-5 cursor-pointer hover:[&_h3]:text-blue-400 shadow-lg shadow-sky-300/10 transition-all hover:shadow-lg hover:shadow-sky-300 duration-300 ease-in">
      <div className="min-w-fit text-xs md:text-sm">{period}</div>
      {imageUrl && (
        <Image src={imageUrl} alt="Project image" width="200" height="48" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2" />
      )}
      <div className="flex flex-col gap-3">
        <h3 className="text-md font-bold text-zinc-300 transition-all duration-300 ease-in-out">
          {title}
        </h3>
        <div className="text-sm">{description}</div>
        {skills && (
          <ul className="flex gap-1 text-sm flex-wrap">
            {skills.map((skill, index) => (
              <li key={index}>
                <Badge content={skill} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
