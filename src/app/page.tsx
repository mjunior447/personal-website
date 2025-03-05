import MainContent from "../components/MainContent";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
