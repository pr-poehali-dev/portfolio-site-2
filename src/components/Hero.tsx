
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-white font-bold leading-tight">
              Привет,<br />Я Юрий!
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Опытный веб-разработчик, специализирующийся на создании современных 
              и отзывчивых веб-приложений с использованием React, TypeScript и 
              современных фреймворков.
            </p>
            
            <div className="pt-4">
              <Button asChild size="lg" className="font-medium text-base rounded-md">
                <a href="#works">Мои работы</a>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center md:justify-end">
            <div className="w-72 h-96 md:w-80 md:h-[450px] bg-secondary rounded-lg border border-border relative">
              <div className="absolute inset-3 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Портрет" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="animated-shape shape-1 rounded"></div>
            <div className="animated-shape shape-2 rounded"></div>
            <div className="animated-shape shape-3 rounded"></div>
            <div className="animated-shape shape-4 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
