"use client";
import InstagramLogo from "@/src/components/icons/InstagramLogo";
import LinkedInLogo from "./icons/LinkedInLogo";
import GithubLogo from "./icons/GithubLogo";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Header = () => {
  const [locale, setLocale] = useState("en");
  const router = useRouter();
  const t = useTranslations("header");

  useEffect(() => {
    const setLocaleFromCookies = () => {
      const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("MY_APP_LOCALE="))
        ?.split("=")[1];

      if (cookieLocale) {
        setLocale(cookieLocale);
      } else {
        // set locale based on browser settings
        const browserLocale = navigator.language.slice(0, 2);
        setLocale(browserLocale);
        document.cookie = `MY_APP_LOCALE=${browserLocale};`;
        router.refresh();
      }
    };

    setLocaleFromCookies();
  }, [router]);

  const changeLocale = (newLocale: string) => {
    document.cookie = `MY_APP_LOCALE=${newLocale};`;
    setLocale(newLocale);
    router.refresh();
  };

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
        <h2 className="text-lg md:text-xl mt-4">{t("role")}</h2>
        <p className="mt-5 text-zinc-400">{t("description")}</p>
      </div>
      <div className="flex items-center justify-between pr-10">
        <ul className="mt-8 lg:mt-0 flex gap-5">
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

        <div className="flex items-center justify-center gap-4 mt-8 lg:mt-0">
          <button
            onClick={() => changeLocale("en")}
            className={`cursor-pointer border-1 border-white p-2 rounded-md transition-all hover:shadow-md hover:shadow-sky-300/65 duration-150 ease-in ${
              locale === "en"
                ? "bg-white text-zinc-800"
                : "bg-zinc-900 text-zinc-400"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLocale("pt")}
            className={`cursor-pointer border-1 border-white p-2 rounded-md transition-all hover:shadow-md hover:shadow-sky-300/65 duration-150 ease-in ${
              locale === "pt"
                ? "bg-white text-zinc-800"
                : "bg-zinc-900 text-zinc-400"
            }`}
          >
            PT-BR
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
