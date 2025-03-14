import InstagramLogo from "@/src/components/icons/InstagramLogo";
import LinkedInLogo from "./icons/LinkedInLogo";
import GithubLogo from "./icons/GithubLogo";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 text-zinc-200">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Mauricio Antero</h1>
        <h2 className="text-lg md:text-xl mt-4">Desenvolvedor Front End</h2>
        <p className="mt-5 text-zinc-400">
          Criando experiências web primorosas desde 2021
        </p>
      </div>
      <nav>
        <ul className="flex-col gap-4 text-zinc-400 hidden lg:flex">
          <li>
            <a href="#about" className="hover:text-zinc-200">
              Sobre
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-zinc-200">
              Experiência
            </a>
          </li>
          <li>
            <a href="#relevant-projects" className="hover:text-zinc-200">
              Projetos relevantes
            </a>
          </li>
        </ul>
      </nav>
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
