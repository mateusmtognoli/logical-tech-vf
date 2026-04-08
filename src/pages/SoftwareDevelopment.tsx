import { motion } from "motion/react";
import { RefreshCw, Smartphone, Link as LinkIcon, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const SoftwareDevelopment = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/dev.webp" 
            alt="Desenvolvimento de Software" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-bg/70 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-white uppercase">
              DESENVOLVIMENTO DE SOFTWARE
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/70 mt-6 font-light max-w-3xl leading-relaxed">
              Criamos softwares sob medida, desde aplicativos móveis complexos até sistemas web corporativos e integrações de APIs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-brand-text">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-bg mb-8 uppercase">
                Software construído para resolver problemas reais
              </h2>
              <div className="space-y-8 text-lg md:text-xl text-brand-bg/80 font-light leading-relaxed">
                <p>
                  Transformamos ideias complexas em produtos digitais escaláveis e de alta performance. Na nossa Fábrica de Software, não entregamos apenas código; entregamos soluções de engenharia que impulsionam a transformação digital das empresas.
                </p>
                <p>
                  Utilizamos metodologias ágeis (Scrum / Kanban) e as tecnologias mais modernas do mercado para garantir que o seu software seja seguro, rápido e pronto para crescer.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-brand-surface p-10 rounded-2xl border border-brand-primary/20 shadow-2xl shadow-brand-primary/5"
            >
              <h3 className="text-2xl font-bold text-brand-text mb-6 text-center uppercase tracking-tight">
                Tem um desafio técnico complexo?
              </h3>
              <p className="text-brand-text/60 text-center mb-10 font-light leading-relaxed">
                Traga o seu projeto para nossos arquitetos de software e descubra como podemos viabilizá-lo.
              </p>
              <Link 
                to="/contato"
                className="w-full py-4 bg-brand-primary text-white font-black rounded-md tracking-widest hover:bg-brand-accent transition-all text-center block uppercase text-sm"
              >
                SOLICITAR ORÇAMENTO
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">
              Nossas Especialidades
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Modernização de Legado (Refactoring)",
                description: "Atualizamos sistemas antigos para arquiteturas modernas (Microsserviços, Serverless), melhorando performance e segurança.",
                icon: RefreshCw
              },
              {
                title: "Desenvolvimento Web & Mobile",
                description: "Aplicativos nativos ou híbridos e plataformas web responsivas focadas na melhor experiência do usuário (UX/UI).",
                icon: Smartphone
              },
              {
                title: "Integração de Sistemas e APIs",
                description: "Conectamos diferentes ferramentas (ERPs, CRMs, Gateways de Pagamento) criando um ecossistema digital unificado.",
                icon: LinkIcon
              },
              {
                title: "Arquitetura Cloud",
                description: "Desenvolvimento focado em computação em nuvem, garantindo alta disponibilidade na AWS, Google Cloud ou Azure.",
                icon: Cloud
              }
            ].map((especialidade, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg/40 p-10 rounded-xl border border-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 group"
              >
                <div className="mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                  <especialidade.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">
                  {especialidade.title}
                </h3>
                <p className="text-brand-text/60 leading-relaxed text-lg font-light">
                  {especialidade.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
