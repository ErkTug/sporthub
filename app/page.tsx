import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import LiveMatches from "../components/home/LiveMatches";
import NewsSection from "../components/home/NewsSection";


export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-100">
        <Hero />
        <LiveMatches />
        <NewsSection />
      </main>

      <Footer />
    </>
  );
}