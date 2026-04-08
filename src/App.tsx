import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Pages
import Cultura from "./pages/Cultura";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Outsourcing from "./pages/Outsourcing";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Recruitment from "./pages/Recruitment";
import Contact from "./pages/Contact";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <img 
      src="/img/logo-logical-tech-2.svg" 
      alt="Logical Tech Logo" 
      className="w-72 h-36 object-contain" 
      referrerPolicy="no-referrer"
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Nossa Cultura", href: "/cultura" },
    { 
      name: "Serviços", 
      href: "#", 
      hasDropdown: true,
      subLinks: [
        { name: "Outsourcing", href: "/outsourcing" },
        { name: "Desenvolvimento de Software", href: "/desenvolvimento-de-software" },
        { name: "Recrutamento", href: "/recrutamento" },
      ]
    },
    { name: "Vagas", href: "https://vagas.hire2jobs.com.br/logicalminds/vagas", isExternal: true },
    { name: "Faq", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ];

  const isContactPage = location.pathname === "/contato";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isContactPage ? "bg-brand-surface border-b border-brand-primary/10 py-2" : (isScrolled ? "bg-brand-bg/95 backdrop-blur-xl border-b border-brand-primary/10 py-2" : "bg-transparent py-4")}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        <Link to="/" className="hover:opacity-80 transition-opacity z-10">
          <Logo className="scale-90 origin-left" />
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[15px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              {link.hasDropdown ? (
                <button className="text-brand-text/60 hover:text-brand-primary transition-colors flex items-center gap-1 cursor-pointer font-sans font-bold uppercase tracking-widest whitespace-nowrap">
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
              ) : link.isExternal ? (
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text/60 hover:text-brand-primary transition-colors relative flex items-center gap-1 font-sans font-bold uppercase tracking-widest group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all w-0 group-hover:w-full" />
                </a>
              ) : (
                <Link 
                  to={link.href} 
                  className={`transition-colors relative flex items-center gap-1 whitespace-nowrap ${location.pathname === link.href ? "text-brand-primary" : "text-brand-text/60 hover:text-brand-primary"}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              )}

              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-brand-surface rounded-sm shadow-2xl py-4 z-50 overflow-hidden"
                    >
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-8 py-4 text-brand-text hover:bg-brand-primary/10 transition-colors text-[15px] font-sans font-bold uppercase tracking-widest"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center z-10">
          <Link 
            to="/contato" 
            className="px-8 py-3 bg-brand-primary text-white rounded-md hover:bg-brand-accent transition-all duration-300 font-black text-[12px] tracking-[0.2em] cursor-pointer blue-glow"
          >
            FALE CONOSCO
          </Link>
        </div>

        <button className="md:hidden text-brand-primary cursor-pointer z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-primary/10 p-8 flex flex-col gap-6 text-center overflow-hidden"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                {link.hasDropdown ? (
                  <>
                    <div className="text-brand-primary text-lg font-bold tracking-tighter flex items-center justify-center gap-1">
                      {link.name}
                    </div>
                    <div className="flex flex-col gap-3 bg-brand-text/5 py-4 rounded-lg">
                      {link.subLinks?.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.href} 
                          className="text-brand-text/60 text-base font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : link.isExternal ? (
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary text-lg font-bold tracking-tighter" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href} 
                    className="text-brand-primary text-lg font-bold tracking-tighter" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contato" 
              className="w-full py-4 bg-brand-primary text-white font-black rounded-md tracking-widest text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              FALE CONOSCO
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-48 pb-20 overflow-hidden bg-brand-surface">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/img/video-capa-lt.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-bg/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 text-white">
            SUA EMPRESA NÃO PERDE DINHEIRO COM SALÁRIOS.<br />
            <span className="text-brand-primary">PERDE COM TEMPO MAL UTILIZADO.</span> <br />
          </h1>
          <p className="text-xl text-brand-text/80 max-w-xl mb-10 leading-relaxed font-light">
            Segundo estudos da PwC e Contabilizei, até 60% do tempo do seu time está preso em tarefas que não exigem inteligência.

          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contato" 
              className="px-10 py-4 bg-brand-primary text-white font-bold rounded-md hover:bg-brand-accent transition-all flex items-center gap-2 group cursor-pointer blue-glow"
            >
              FALAR COM ESPECIALISTA <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};

const ProblemContext = () => {
  return (
    <section id="mentalidade" className="py-32 bg-brand-text relative overflow-hidden border-t border-brand-bg/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.4em] mb-12">Quebra de Mentalidade</h2>
          
          <div className="flex flex-col items-center gap-8 mb-16">
            <ul className="text-left space-y-6 text-xl md:text-2xl text-brand-bg/80 font-light list-none">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                <span><span className="font-bold text-brand-bg">40% a 70%</span> do trabalho financeiro é repetitivo</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                <span>Mais de <span className="font-bold text-brand-bg">65%</span> segue regras simples</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                <span>Menos de <span className="font-bold text-brand-bg">15%</span> é estratégico</span>
              </li>
            </ul>
          </div>

          <p className="text-xl md:text-2xl font-light text-brand-bg/60 mb-10 italic">
            Se metade do seu time faz trabalho automatizável...
          </p>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-black text-brand-bg tracking-tighter leading-tight">
              VOCÊ NÃO TEM UM PROBLEMA DE PESSOAS.
            </h3>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary tracking-tighter leading-tight">
              TEM UM PROBLEMA DE OPERAÇÃO.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DecisionVirada = () => {
  const analysisItems = [
    { src: "/img/48h.png", alt: "Onde o tempo está sendo perdido" },
    { src: "/img/custo.png", alt: "Quanto isso custa" },
    { src: "/img/automacao.png", alt: "O que pode ser automatizado" }
  ];

  return (
    <section id="solucao" className="py-32 bg-brand-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-surface p-12 md:p-20 border border-brand-primary/20 relative rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[120px] -z-10" />
          
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
              <span className="text-brand-primary">CLAREZA E CONTROLE</span>
            </h3>
            <p className="text-xl text-brand-text/80 font-medium max-w-2xl mx-auto">
              Nós medimos exatamente onde sua operação está perdendo tração:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {analysisItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand-primary/90 mb-6 text-center h-8 flex items-center">
                  {item.alt}
                </p>
                
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-10 tracking-tight">
              E isso não vai levar mais que <span className="text-brand-primary">48 horas.</span>
            </p>

            <Link 
              to="/contato" 
              className="inline-flex px-12 py-5 bg-brand-primary text-white font-black rounded-md tracking-widest hover:bg-brand-accent transition-all blue-glow uppercase text-sm"
            >
              QUERO MINHA ANÁLISE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-brand-bg-light relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.4em] mb-16"></h2>
          
          <div className="space-y-16 mb-24">
            <div className="space-y-4">
              <p className="text-3xl md:text-5xl font-black tracking-tighter text-brand-primary leading-tight max-w-4xl mx-auto uppercase">
                Cada empresa tem uma operação diferente.
              </p>
              <p className="text-xl md:text-2xl text-brand-text/60 font-light">
                Não é preciso mais trabalhar com soluções prontas.
              </p>
            </div>

            <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 p-8 md:p-12 bg-brand-surface border border-brand-primary/20 rounded-2xl blue-glow mx-auto">
              <div className="flex items-center gap-4 md:gap-8 text-sm md:text-xl font-black tracking-[0.2em] text-brand-primary uppercase">
                <motion.span whileHover={{ scale: 1.05 }} className="cursor-default">MAPEAR</motion.span>
                <span className="text-brand-text/20">→</span>
                <motion.span whileHover={{ scale: 1.05 }} className="cursor-default">MEDIR</motion.span>
                <span className="text-brand-text/20">→</span>
                <motion.span whileHover={{ scale: 1.05 }} className="cursor-default">AUTOMATIZAR</motion.span>
                <span className="text-brand-text/20">→</span>
                <motion.span whileHover={{ scale: 1.05 }} className="cursor-default">MONITORAR</motion.span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl text-white font-bold leading-tight uppercase">
              Desenhamos soluções e agentes de IA sob medida para cada área da sua operação.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Authority = () => {
  return (
    <section id="culture" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 leading-tight">
              O que isso tudo significa na prática:
            </h3>
            
            <ul className="space-y-6 mb-12">
              {[
                "30% a 50% do tempo recuperado",
                "Redução de custo operacional",
                "Mais produtividade sem aumentar equipe",
                "Possibilita reduzir a necessidade operacional"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-xl text-brand-text font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(197,165,114,0.8)]" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="space-y-6 mb-12">
              <p className="text-xl text-brand-text/60 font-light italic">Mas o principal:</p>
              <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase">
                SEU TIME PARA DE OPERAR <br />
                <span className="text-brand-primary">E COMEÇA A PENSAR O NEGÓCIO</span>
              </h4>
            </div>

            <Link 
              to="/contato" 
              className="inline-flex px-10 py-4 bg-brand-primary text-white font-bold rounded-md hover:bg-brand-accent transition-all blue-glow"
            >
              FALE CONOSCO
            </Link>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-brand-primary/20 blue-glow relative group">
              <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="/img/foto4.jpg" 
                alt="Impacto e Estratégia" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section id="jobs" className="py-32 bg-brand-text relative overflow-hidden border-t border-brand-bg/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-mono text-brand-primary uppercase tracking-[0.4em] mb-8">Agende seu diagnóstico</h3>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-bg mb-12 uppercase leading-tight">
            48 HORAS PARA DESCOBRIR <br />
            <span className="text-brand-primary">ONDE SUA EMPRESA ESTÁ PERDENDO TEMPO E DINHEIRO</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/contato" 
              className="px-12 py-5 bg-brand-primary text-white font-black rounded-md tracking-widest hover:bg-brand-accent transition-all blue-glow"
            >
              QUERO MEU DIAGNÓSTICO
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialIcons = [
    { src: "/img/whatsapp.png", alt: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=5511939412989&text&type=phone_number&app_absent=0" },
    { src: "/img/link.png", alt: "LinkedIn", href: "https://www.linkedin.com/company/logical-minds/posts/?feedView=all" },
    { src: "/img/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/logicalminds.it/" },
    { src: "/img/facebook.png", alt: "Facebook", href: "https://www.facebook.com/logicalmindsbrasil" },
    { src: "/img/youtube.webp", alt: "YouTube", href: "https://www.youtube.com/@logicalminds3292/featured" },
  ];

  return (
    <footer className="py-20 bg-brand-surface text-brand-text border-t border-brand-text/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <div className="mb-8">
              <Logo className="scale-75 origin-left -ml-4" />
            </div>
            <p className="text-brand-text/70 text-[13px] leading-relaxed mb-10 max-w-sm font-light">
              A Logical Tech é uma empresa especializada em desenvolvimento de software sob medida, consultoria em tecnologia, arquitetura de sistemas e aplicação de inteligência artificial para empresas que buscam escala, eficiência e crescimento sustentável.
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ src, alt, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center hover:bg-brand-primary transition-all duration-300 border border-brand-text/10 overflow-hidden p-2"
                >
                  <img 
                    src={src} 
                    alt={alt} 
                    className="w-full h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Para Empresas */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-bold mb-6 relative inline-block">
              Para Empresas
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-primary"></span>
            </h5>
            <ul className="mt-8 space-y-4 text-brand-text/60 text-[13px] font-light">
              <li><Link to="/recrutamento" className="hover:text-brand-primary transition-colors">Recrutamento e Seleção</Link></li>
              <li><Link to="/outsourcing" className="hover:text-brand-primary transition-colors">Outsourcing IT</Link></li>
              <li><Link to="/desenvolvimento-de-software" className="hover:text-brand-primary transition-colors">Fábrica de Software</Link></li>
              <li><Link to="/contato" className="hover:text-brand-primary transition-colors">Contrate Agora</Link></li>
            </ul>
          </div>

          {/* Nossa Empresa */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-bold mb-6 relative inline-block">
              Nossa Empresa
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-primary"></span>
            </h5>
            <ul className="mt-8 space-y-4 text-brand-text/60 text-[13px] font-light">
              <li><Link to="/cultura" className="hover:text-brand-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Blog e Insights</Link></li>
              <li><Link to="/faq" className="hover:text-brand-primary transition-colors">Perguntas Frequentes</Link></li>
              <li><a href="https://vagas.hire2jobs.com.br/logicalminds/vagas" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Trabalhe Conosco (Vagas)</a></li>
            </ul>
          </div>

          {/* Contato & Newsletter */}
          <div className="md:col-span-4">
            <h5 className="text-lg font-bold mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-primary"></span>
            </h5>
            <div className="mt-8 space-y-6">
              <div>
                <div className="font-bold text-[13px] mb-1 text-brand-primary">Endereço:</div>
                <div className="text-brand-text/60 text-[13px] font-light">São Paulo, SP - Brasil</div>
              </div>
              <div>
                <div className="font-bold text-[13px] mb-1 text-brand-primary">Email:</div>
                <div className="text-brand-text/60 text-[13px] font-light">contato@logicalminds.com.br</div>
              </div>
              <div>
                <div className="font-bold text-[13px] mb-3">Newsletter:</div>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Seu email" 
                    className="bg-brand-text/5 border border-brand-text/10 rounded px-4 py-2.5 text-[13px] w-full focus:outline-none focus:border-brand-primary text-brand-text"
                  />
                  <button className="bg-brand-primary text-white font-bold px-6 py-2.5 rounded text-[11px] tracking-widest hover:bg-brand-accent transition-colors whitespace-nowrap">
                    ASSINAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-brand-text/40">
          <div>© 2026 LOGICAL TECH. TODOS OS DIREITOS RESERVADOS.</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemContext />
      <DecisionVirada />
      <Services />
      <Authority />
      <FinalCTA />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="selection:bg-brand-primary selection:text-white bg-brand-bg min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cultura" element={<Cultura />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/outsourcing" element={<Outsourcing />} />
            <Route path="/desenvolvimento-de-software" element={<SoftwareDevelopment />} />
            <Route path="/recrutamento" element={<Recruitment />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
