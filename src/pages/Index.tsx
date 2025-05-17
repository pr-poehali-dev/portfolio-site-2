import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Advantages from "@/components/Advantages";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
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
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
