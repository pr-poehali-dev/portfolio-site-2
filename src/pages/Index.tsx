import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Advantages from "@/components/Advantages";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Works />
        <Advantages />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
