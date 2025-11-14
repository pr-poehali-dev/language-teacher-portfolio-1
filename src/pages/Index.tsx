import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/20 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Емельянова<br />Таисья
              </h1>
              <p className="text-2xl text-primary font-semibold">
                Преподаватель английского и немецкого языков
              </p>
              <div className="flex gap-3 flex-wrap">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  <Icon name="Languages" size={18} className="mr-2" />
                  Английский C1
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  <Icon name="Languages" size={18} className="mr-2" />
                  Немецкий B2
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Целеустремленный молодой педагог с современным подходом к обучению и любовью к детям
              </p>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/f8d2c50e-8110-4c16-a911-8c2fd2ec25b0.png"
                  alt="Емельянова Таисья"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          Личные данные
        </h2>
        <Card className="border-2 border-primary/10 shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">ФИО</p>
                    <p className="text-lg font-semibold">Емельянова Таисья</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="Calendar" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Дата рождения</p>
                    <p className="text-lg font-semibold">16.05.2004</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Образование</p>
                    <p className="text-lg font-semibold">Череповецкий государственный институт</p>
                    <p className="text-base text-muted-foreground mt-1">
                      Педагогическое образование с двумя профилями подготовки
                      (английский и немецкий языки)
                    </p>
                    <p className="text-base text-muted-foreground">2022-2027</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            О себе
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Target",
                title: "Целеустремленность",
                text: "Целеустремленный молодой педагог"
              },
              {
                icon: "BookOpen",
                title: "Экспертность",
                text: "Углубленно владею предметом"
              },
              {
                icon: "Heart",
                title: "Работа с детьми",
                text: "Легко нахожу общий язык с детьми разных возрастов"
              },
              {
                icon: "Sparkles",
                title: "Мотивация",
                text: "Умею мотивировать и заинтересовывать учащихся в изучении иностранных языков"
              },
              {
                icon: "Laptop",
                title: "Современные технологии",
                text: "Владею современными образовательными технологиями, включая проектную деятельность и проблемное обучение"
              },
              {
                icon: "MessageCircle",
                title: "Коммуникативный подход",
                text: "Использую коммуникативный подход для развития разговорных навыков"
              }
            ].map((item, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          Опыт работы
        </h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Icon name="Briefcase" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Педагогическая практика</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">Проходила практику в школе №21</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">Проходила практику в Череповецком лесомеханическом техникуме</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Icon name="UserCheck" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Индивидуальное репетиторство</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="text-base px-4 py-1">3 года опыта</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Имею опыт работы в качестве индивидуального репетитора по английскому языку
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Профессиональные навыки
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "FileCheck",
                title: "Владение ФГОС",
                description: "Знание и применение Федеральных государственных образовательных стандартов"
              },
              {
                icon: "ClipboardCheck",
                title: "Подготовка к экзаменам",
                description: "Подготовка к ОГЭ, ЕГЭ, ВПР"
              },
              {
                icon: "Users",
                title: "Методики обучения",
                description: "Владение методиками дифференцированного и развивающего обучения"
              },
              {
                icon: "Sparkles",
                title: "Внеурочная деятельность",
                description: "Организация внеурочной деятельности"
              }
            ].map((skill, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Icon name={skill.icon} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{skill.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Языковые компетенции</h3>
                <div className="flex gap-6 items-center justify-center flex-wrap">
                  <div className="text-center">
                    <div className="bg-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mb-3 shadow-lg">
                      C1
                    </div>
                    <p className="text-lg font-semibold">Английский</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mb-3 shadow-lg">
                      B2
                    </div>
                    <p className="text-lg font-semibold">Немецкий</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-6xl">
        <Card className="border-2 border-primary shadow-xl bg-gradient-to-br from-primary/5 to-white">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/f383250a-8ff0-4d12-9469-77ffacb34bed.png"
                  alt="QR код для связи"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Свяжитесь со мной</h2>
            <p className="text-lg text-muted-foreground">
              Отсканируйте QR-код или свяжитесь удобным способом
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-primary/5 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Емельянова Таисья. Преподаватель английского и немецкого языков
          </p>
        </div>
      </footer>
    </div>
  );
}
