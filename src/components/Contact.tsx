
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "contact@example.com",
    link: "mailto:contact@example.com"
  },
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 (999) 123-45-67",
    link: "tel:+79991234567"
  },
  {
    icon: "MapPin",
    label: "Локация",
    value: "Москва, Россия"
  }
];

const socialLinks = [
  { icon: "Github", link: "https://github.com" },
  { icon: "Linkedin", link: "https://linkedin.com" },
  { icon: "Twitter", link: "https://twitter.com" },
  { icon: "Instagram", link: "https://instagram.com" }
];

const Contact = () => {
  return (
    <section id="contacts" className="section-padding bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading">Связаться со мной</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="text-muted-foreground mb-8">
              Заинтересованы в сотрудничестве или есть вопросы? Свяжитесь со мной, используя контактную форму или через социальные сети.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted text-primary">
                    <Icon name={item.icon} className="w-5 h-5" />
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">Социальные сети</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.icon} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                  >
                    <Icon name={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-6">Отправить сообщение</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Имя
                  </label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Тема
                </label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Ваше сообщение..." 
                  rows={5} 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
