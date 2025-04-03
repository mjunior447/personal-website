import { links } from "../constants/links";
import ExternalLink from "./ExternalLink";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-md md:text-md text-zinc-400 tracking-wide leading-6"
    >
      <h2 className="uppercase text-slate-200 font-bold tracking-wider mb-4">
        Sobre
      </h2>
      <p className="mb-4">
        Sou um Desenvolvedor Web fascinado pela criação de interfaces intuitivas
        e acessíveis. Meu trabalho intercala desenvolvimento, layout e
        usabilidade, criando uma experiência fluida e performática.
      </p>

      <p className="mb-4">
        Atualmente, trabalho como Desenvolvedor Front End autônomo, criando
        interfaces únicas e entregando soluções completas, testadas de ponta a
        ponta, sempre com foco no cliente. Já tive oportunidade de trabalhar
        para diversas empresas, desde startups - como a{" "}
        <ExternalLink href={links.companies.easy2life}>Easy2Life</ExternalLink>{" "}
        - a empresas grandes - como a{" "}
        <ExternalLink href={links.companies.sulamerica}>
          SulAmérica
        </ExternalLink>
        . Com isso, adquiri uma experiência de carreira multifacetada, tendo
        atuado em times diversos tanto em tamanho, quanto em background.
      </p>

      <p className="mb-4">
        Também tenho expertise em Tradução e Revisão de textos. Colaborei como
        tradutor e revisor em projetos literários,{" "}
        <ExternalLink href={links.companies.hechoPorNosotros}>
          em inglês
        </ExternalLink>{" "}
        e{" "}
        <ExternalLink href={links.companies.expertoAnimal}>
          em espanhol
        </ExternalLink>
        , traduzi
        <ExternalLink href={links.projects.bookTranslation}>
          {" "}
          o livro House of Cards
        </ExternalLink>{" "}
        do inglês para o português e participei de projetos voluntários na área.
      </p>

      <p className="mb-4">
        Estou me aperfeiçoando continuamente. No momento, estou aprendendo
        arquitetura Cloud na AWS e desenvolvimento back-end com Java e Spring
        Boot.
      </p>
    </section>
  );
};

export default AboutSection;
