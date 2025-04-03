import InstagramLogo from "@/src/components/icons/InstagramLogo";
import LinkedInLogo from "./icons/LinkedInLogo";
import GithubLogo from "./icons/GithubLogo";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 text-zinc-200">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[180%] skew-y-12"
        )}
      />
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Mauricio Antero</h1>
        <h2 className="text-lg md:text-xl mt-4">Desenvolvedor Front End</h2>
        <p className="mt-5 text-zinc-400">
          Criador de experiências web impactantes e performáticas
        </p>
      </div>
      <ul className="mt-8 lg:mt-0 inline-flex gap-5">
        <li>
          <a
            href="https://github.com/mjunior447"
            target="_blank"
            aria-label="GitHub (opens in a new tab)"
          >
            <GithubLogo classNames="hover:opacity-100" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mauricio-antero/"
            target="_blank"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <LinkedInLogo classNames="hover:opacity-100" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mau_antero"
            target="_blank"
            aria-label="Instagram (opens in a new tab)"
          >
            <InstagramLogo classNames="hover:opacity-100" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
