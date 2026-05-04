import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Опыт", href: "#experience" },
  { label: "Отзывы", href: "#reviews" },
];

const SERVICES = [
  {
    icon: "Scale",
    title: "Уголовные дела",
    desc: "Защита на всех стадиях уголовного процесса — от дознания до обжалования приговора.",
  },
  {
    icon: "FileText",
    title: "Гражданские споры",
    desc: "Защита имущественных прав, споры о собственности, договорные конфликты.",
  },
  {
    icon: "Briefcase",
    title: "Корпоративное право",
    desc: "Юридическое сопровождение бизнеса, сделок, корпоративных конфликтов.",
  },
  {
    icon: "Home",
    title: "Семейные дела",
    desc: "Развод, раздел имущества, алименты, споры об опеке над детьми.",
  },
  {
    icon: "Building2",
    title: "Арбитражные споры",
    desc: "Представительство в арбитражных судах, взыскание долгов и банкротство.",
  },
  {
    icon: "Shield",
    title: "Административное право",
    desc: "Обжалование решений госорганов, защита прав граждан в госструктурах.",
  },
];

const EXPERIENCE = [
  { year: "2005", title: "Начало карьеры", desc: "Окончание Московского государственного юридического университета с отличием." },
  { year: "2008", title: "Адвокатский статус", desc: "Получение адвокатского удостоверения. Специализация в уголовном праве." },
  { year: "2013", title: "Собственная практика", desc: "Открытие собственного адвокатского кабинета. Более 200 успешных дел." },
  { year: "2019", title: "Признание", desc: "Включение в рейтинг лучших адвокатов России по версии «Право.ru-300»." },
  { year: "2024", title: "Сегодня", desc: "Более 500 выигранных дел, 18 лет практики, команда из 5 специалистов." },
];

const REVIEWS = [
  {
    name: "Александр М.",
    role: "Предприниматель",
    text: "Блестящая защита по сложному уголовному делу. Благодаря профессионализму адвоката дело было прекращено на стадии следствия. Рекомендую без оговорок.",
    stars: 5,
  },
  {
    name: "Елена К.",
    role: "Частное лицо",
    text: "Обратилась по делу о разделе имущества. Адвокат чётко выстроил стратегию и отстоял мои интересы в суде. Результат превзошёл ожидания.",
    stars: 5,
  },
  {
    name: "ООО «Техстрой»",
    role: "Строительная компания",
    text: "Сопровождали несколько крупных арбитражных споров. Высокий профессионализм, строгое соблюдение сроков. Постоянный партнёр по правовым вопросам.",
    stars: 5,
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-gray-200 shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[hsl(218,72%,22%)] flex items-center justify-center">
              <Icon name="Scale" size={16} className="text-white" />
            </div>
            <div>
              <div className="font-display font-semibold text-base leading-tight text-[hsl(218,72%,22%)]">
                ИВАНОВ А.В.
              </div>
              <div className="text-[9px] font-body font-medium tracking-widest text-gray-500 uppercase">
                Адвокат
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+74950000000"
            className="hidden md:block bg-[hsl(218,72%,22%)] text-white font-body text-xs font-medium tracking-widest uppercase px-5 py-2.5 hover:bg-[hsl(218,72%,16%)] transition-colors"
          >
            Консультация
          </a>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link py-1"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(218,72%,12%) 0%, hsl(218,72%,22%) 55%, hsl(218,60%,30%) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px)`,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-block text-[hsl(45,80%,62%)] font-body text-xs font-medium tracking-[0.2em] uppercase mb-6 border border-[hsl(45,80%,52%)] px-3 py-1">
                Профессиональная юридическая помощь
              </span>
            </div>

            <h1
              className="opacity-0 animate-fade-up font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              Защита<br />
              <em className="italic text-[hsl(45,80%,62%)]">ваших прав</em><br />
              и интересов
            </h1>

            <p
              className="opacity-0 animate-fade-up font-body text-blue-200 text-base font-light leading-relaxed mb-10 max-w-md"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              18 лет в юридической практике. Более 500 успешно завершённых дел.
              Индивидуальный подход к каждому клиенту.
            </p>

            <div
              className="opacity-0 animate-fade-up flex flex-wrap gap-4"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              <a
                href="#services"
                className="bg-[hsl(45,80%,52%)] text-gray-900 font-body font-semibold text-sm tracking-wide uppercase px-7 py-3.5 hover:bg-[hsl(45,80%,45%)] transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="border border-white text-white font-body font-medium text-sm tracking-wide uppercase px-7 py-3.5 hover:bg-white hover:text-[hsl(218,72%,22%)] transition-colors"
              >
                Обо мне
              </a>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up grid grid-cols-2 gap-4"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            {[
              { num: "18+", label: "Лет практики" },
              { num: "500+", label: "Выигранных дел" },
              { num: "95%", label: "Успешных решений" },
              { num: "3", label: "Специализации" },
            ].map((s) => (
              <div key={s.label} className="border border-white/20 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="font-display text-4xl font-semibold text-white mb-1">{s.num}</div>
                <div className="font-body text-blue-200 text-xs tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-white text-[10px] tracking-widest uppercase">Прокрутить</span>
          <div className="w-px h-10 bg-white" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div
              className="w-full aspect-[3/4] max-w-sm mx-auto md:mx-0 bg-[hsl(218,20%,94%)] relative overflow-hidden"
              style={{ boxShadow: "12px 12px 0 hsl(218,72%,22%)" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[hsl(218,40%,70%)]">
                <Icon name="User" size={80} />
                <span className="mt-4 font-body text-sm tracking-wide text-[hsl(218,20%,60%)]">Фото адвоката</span>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[hsl(45,80%,52%)]" />
          </div>

          <div>
            <span className="section-divider mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Алексей Владимирович<br />
              <span className="text-[hsl(218,72%,22%)]">Иванов</span>
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mb-5">
              Адвокат с 18-летним стажем, член Адвокатской палаты Москвы. Специализируюсь на уголовных,
              гражданских и арбитражных делах. Каждое дело — это личная ответственность перед клиентом.
            </p>
            <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
              Моя работа строится на принципах честности, конфиденциальности и неотступной защиты ваших
              интересов — от первой консультации до вступления решения в законную силу.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "GraduationCap", text: "МГЮА, диплом с отличием" },
                { icon: "Award", text: "Рейтинг «Право.ru-300»" },
                { icon: "MapPin", text: "Москва, ул. Тверская, 18" },
                { icon: "Phone", text: "+7 (495) 000-00-00" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[hsl(218,20%,94%)] flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} fallback="Circle" size={14} className="text-[hsl(218,72%,22%)]" />
                  </div>
                  <span className="font-body text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-[hsl(218,72%,22%)] text-white font-body text-sm font-medium tracking-wide uppercase px-6 py-3 hover:bg-[hsl(218,72%,16%)] transition-colors"
            >
              Посмотреть услуги
              <Icon name="ArrowRight" size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-[hsl(218,20%,97%)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="section-divider mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Области практики
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed">
              Комплексное юридическое сопровождение физических лиц и бизнеса.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 hover:bg-[hsl(218,72%,22%)] group transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-[hsl(218,20%,94%)] group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors">
                  <Icon name={s.icon} fallback="Circle" size={18} className="text-[hsl(218,72%,22%)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="section-divider mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Опыт </h2>
            <p className="font-body text-gray-500 text-base">
              Путь от студента-юриста до признанного специалиста.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-0">
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="relative flex gap-8 md:gap-16 items-start group">
                  <div className="flex-shrink-0 w-14 text-right pt-1">
                    <span className="font-body text-sm font-semibold text-[hsl(218,72%,22%)] tracking-wide">
                      {e.year}
                    </span>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 flex-col items-center mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-[hsl(218,72%,22%)] group-hover:bg-[hsl(45,80%,52%)] transition-colors relative z-10" />
                  </div>
                  <div className="pb-10 flex-1">
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">{e.title}</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-[hsl(218,72%,22%)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="section-divider mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
              Отзывы клиентов
            </h2>
            <p className="font-body text-blue-200 text-base">
              Мнения тех, кому удалось отстоять свои права.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-[hsl(45,80%,62%)] text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-blue-100 text-sm leading-relaxed mb-6 italic">
                  «{r.text}»
                </p>
                <div className="border-t border-white/10 pt-5">
                  <div className="font-body font-semibold text-white text-sm">{r.name}</div>
                  <div className="font-body text-blue-300 text-xs mt-0.5">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(45,80%,52%)] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl font-semibold text-gray-900 mb-1">
              Нужна юридическая консультация?
            </h3>
            <p className="font-body text-gray-700 text-sm">
              Свяжитесь со мной — первый разговор бесплатно.
            </p>
          </div>
          <a
            href="tel:+74950000000"
            className="flex-shrink-0 bg-[hsl(218,72%,22%)] text-white font-body font-semibold text-sm tracking-wide uppercase px-8 py-4 hover:bg-[hsl(218,72%,16%)] transition-colors flex items-center gap-2"
          >
            <Icon name="Phone" size={15} />
            +7 (495) 000-00-00
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(218,72%,10%)] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-white/10 flex items-center justify-center">
              <Icon name="Scale" size={13} className="text-white" />
            </div>
            <span className="font-display text-white text-sm font-medium">Иванов А.В. — Адвокат</span>
          </div>
          <div className="font-body text-blue-300 text-xs text-center">
            Москва · ул. Тверская, 18 · +7 (495) 000-00-00 · ivanov@advokat.ru
          </div>
          <div className="font-body text-blue-400 text-xs">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}