
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Как оптимизировать React-приложение для повышения производительности",
    date: "15 мая 2025",
    description: "В этой статье мы рассмотрим основные методы оптимизации React-приложений, включая мемоизацию, виртуализацию списков и правильную работу с состоянием.",
    category: "React",
    readTime: "7 мин"
  },
  {
    id: 2,
    title: "TypeScript: почему стоит изучить его в 2025 году",
    date: "2 мая 2025",
    description: "TypeScript становится стандартом в мире веб-разработки. Разберемся, какие преимущества он дает и почему его стоит добавить в свой технический арсенал.",
    category: "TypeScript",
    readTime: "5 мин"
  },
  {
    id: 3,
    title: "CSS Grid и Flexbox: современные подходы к верстке",
    date: "24 апреля 2025",
    description: "Сравнение двух основных подходов к созданию адаптивных макетов. Когда использовать Grid, а когда Flexbox? Практические примеры из реальных проектов.",
    category: "CSS",
    readTime: "6 мин"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-black/50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-white">Мой блог</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Делюсь знаниями и опытом в сфере веб-разработки. 
          Подписывайтесь, чтобы не пропустить новые статьи!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-background/90 border border-border/60 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-xs px-2 py-0 bg-background/80">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-primary group-hover:text-primary/80 transition-colors duration-300 h-auto">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            Все статьи
            <Icon name="ChevronRight" className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
