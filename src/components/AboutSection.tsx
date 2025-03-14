import { links } from "../constants/links";
import ExternalLink from "./ExternalLink";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-md md:text-md text-zinc-400 tracking-wide leading-6"
    >
      <h2 className="uppercase text-slate-200 font-bold tracking-wider mb-4 lg:hidden">
        Sobre
      </h2>
      <p className="mb-4">
        Sou um Desenvolvedor Web fascinado pela criação de interfaces que sejam
        ao mesmo tempo bonitas, fáceis de usar e acessíveis. Meu momento de
        brilho acontece quando posso intercalar desenvolvimento, layout e
        usabilidade, criando uma experiência fluida e performática.
      </p>

      <p className="mb-4">
        Atualmente, trabalho como Desenvolvedor Front End autônomo, criando
        interfaces únicas e entregando soluções completas, testadas de ponta a
        ponta, sempre com foco no cliente. Já tive oportunidade de trabalhar
        para diversas empresas, de startups - como a{" "}
        <ExternalLink href={links.companies.easy2life}>Easy2Life</ExternalLink>{" "}
        - a empresas grandes - como a{" "}
        <ExternalLink href={links.companies.sulamerica}>
          SulAmérica
        </ExternalLink>
        . Com isso, adquiri uma experiência de carreira multifacetada, tendo
        atuado em times diversos tanto em tamanho, quanto em background.
      </p>

      <p className="mb-4">
        Avançando um pouco mais no passado, traduzi{" "}
        <ExternalLink href={links.projects.bookTranslation}>
          um livro de literatura
        </ExternalLink>{" "}
        do inglês para o português, e colaborei como tradutor e revisor de texto
        em outros projetos literários,{" "}
        <ExternalLink href={links.companies.hechoPorNosotros}>
          em inglês
        </ExternalLink>{" "}
        e{" "}
        <ExternalLink href={links.companies.expertoAnimal}>
          em espanhol
        </ExternalLink>
        .
      </p>

      <p className="mb-4">
        Quando sobra algum tempinho, eu gosto de ler, praticar exercícios
        físicos, ouvir música e passar um tempo com pessoas queridas.
      </p>
    </section>
  );
};

export default AboutSection;
