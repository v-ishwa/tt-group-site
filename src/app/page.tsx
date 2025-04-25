import Header from "@/components/Header";
import Landing from "@/components/home/Landing";
import Clients from "@/components/home/Clients";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import ClientReviews from "@/components/home/ClientReviews";
import MakingDiff from "@/components/home/MakingDiff";
import Footer from "@/components/Footer";
import Companies from "@/components/home/Companies";
import GlobalPresence from "@/components/home/GlobalPresence";
import Careers from "@/components/home/Careers";
import NewsLetter from "@/components/home/NewsLetter";
import Achievements from "@/components/home/Achievements";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Clients />
      <About />
      <Services />
      <Companies />
      <Achievements />
      <GlobalPresence />
      <ClientReviews />
      <MakingDiff />
      <NewsLetter />
      <Careers />
      <Footer />
    </>
  );
}
