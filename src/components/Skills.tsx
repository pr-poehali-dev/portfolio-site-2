import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface CategorySkills {
  category: string;
  skills: Skill[];
}

const skillsData: CategorySkills[] = [
  {
    category: "Фронтенд",
    skills: [
      { name: "React", icon: "Code", level: 90 },
      { name: "HTML/CSS", icon: "Layout", level: 95 },
      { name: "JavaScript", icon: "Braces", level: 85 },
    ],
  },
  {
    category: "Бэкенд",
    skills: [
      { name: "Node.js", icon: "Server", level: 75 },
      { name: "Express", icon: "Package", level: 80 },
      { name: "SQL", icon: "Database", level: 70 },
    ],
  },
  {
    category: "Инструменты",
    skills: [
      { name: "Git", icon: "GitBranch", level: 90 },
      { name: "Figma", icon: "Figma", level: 85 },
      { name: "VS Code", icon: "Code2", level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading">Мои навыки</h2>

        <div className="mb-8 text-muted-foreground">
          <p className="max-w-3xl">
            В своей работе я использую современный стек технологий, который
            позволяет создавать быстрые, отзывчивые и масштабируемые
            веб-приложения. Мой подход сочетает красивый фронтенд с надежным
            бэкендом и оптимальными инструментами разработки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <div>
            {skillsData.slice(0, 2).map((category) => (
              <div key={category.category} className="mb-10">
                <h3 className="text-xl font-semibold mb-6">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon
                            name={skill.icon}
                            className="w-5 h-5 text-primary"
                          />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            {skillsData.slice(2).map((category) => (
              <div key={category.category} className="mb-10">
                <h3 className="text-xl font-semibold mb-6">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon
                            name={skill.icon}
                            className="w-5 h-5 text-primary"
                          />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-6 bg-secondary rounded-lg border border-border">
              <h4 className="font-semibold mb-3">О технологиях</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Для фронтенд-разработки я использую React — мощную библиотеку,
                которая позволяет создавать интерактивные пользовательские
                интерфейсы с компонентным подходом. HTML5 и CSS3 с
                препроцессорами обеспечивают структуру и стиль, а JavaScript
                добавляет функциональность.
              </p>
              <p className="text-muted-foreground text-sm">
                На бэкенде я работаю с Node.js и Express для создания
                масштабируемых API. Для инструментов разработки я выбираю Git
                для контроля версий, Figma для дизайна интерфейсов и VS Code как
                мощную и гибкую среду разработки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
