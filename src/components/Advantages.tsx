
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const advantages: Advantage[] = [
  {
    id: 1,
    title: "Индивидуальный подход",
    description: "Для каждого проекта разрабатываю уникальное решение, учитывая все требования и пожелания клиента.",
    icon: "Fingerprint"
  },
  {
    id: 2,
    title: "Точные сроки",
    description: "Всегда выполняю работу в оговоренные сроки, тщательно планируя этапы разработки.",
    icon: "Clock"
  },
  {
    id: 3,
    title: "Адаптивный дизайн",
    description: "Ваш сайт будет прекрасно выглядеть на любом устройстве — от мобильного телефона до настольного компьютера.",
    icon: "Smartphone"
  },
  {
    id: 4,
    title: "Техническая поддержка",
    description: "Обеспечиваю сопровождение проекта после запуска, оперативно решая возникающие вопросы.",
    icon: "HeadphonesIcon"
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="section-padding py-20 bg-black">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading text-4xl font-bold text-center mb-16 text-white">Мои преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage) => (
            <Card key={advantage.id} className="bg-[#121212] border-[#2a2a2a] overflow-hidden hover:border-[#e74c3c] transition-all duration-300">
              <CardContent className="p-8 flex gap-6">
                <div className="shrink-0 bg-[#e74c3c]/10 p-4 rounded-full h-fit">
                  <Icon 
                    name={advantage.icon} 
                    className="w-8 h-8 text-[#e74c3c]" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#e74c3c] text-white rounded-md hover:bg-[#c0392b] transition-colors cursor-pointer">
            <span>Обсудить проект</span>
            <Icon name="MessageSquare" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
