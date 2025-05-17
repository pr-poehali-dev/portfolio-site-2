
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface WorkProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: WorkProject[] = [
  {
    id: 1,
    title: "E-commerce платформа",
    description: "Современный интернет-магазин с адаптивным дизайном и интеграцией платежных систем",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Дашборд аналитики",
    description: "Интерактивная панель управления для визуализации и анализа бизнес-данных",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    tags: ["React", "TypeScript", "D3.js"],
    link: "#"
  },
  {
    id: 3,
    title: "Мобильное приложение",
    description: "Кроссплатформенное приложение для организации и планирования задач",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2340&auto=format&fit=crop",
    tags: ["React Native", "Firebase"],
    link: "#"
  }
];

const Works = () => {
  return (
    <section id="works" className="section-padding bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading">Мои работы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-border bg-card hover:border-primary transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-muted text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                >
                  Подробнее
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-foreground border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            Смотреть все проекты
            <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
