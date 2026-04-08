import { motion } from "motion/react";
import { Zap, TrendingDown, Maximize, Target, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Outsourcing = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/out.jpg" 
            alt="Outsourcing" 
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
              OUTSOURCING
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/70 mt-6 font-light max-w-3xl leading-relaxed">
              Ganhe flexibilidade e velocidade alocando squads ou desenvolvedores seniores diretamente nos seus projetos.
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
                Escale seu time técnico sob demanda
              </h2>
              <div className="space-y-8 text-lg md:text-xl text-brand-bg/80 font-light leading-relaxed">
                <p>
                  O modelo de Outsourcing de TI da <span className="text-brand-primary font-medium">Logical Tech</span> permite que sua empresa expanda sua capacidade de entrega sem os custos e as amarras de contratações permanentes. Fornecemos profissionais altamente qualificados – desde Desenvolvedores e Engenheiros de Dados até Product Owners e Scrum Masters – para atuarem como uma extensão do seu time.
                </p>
                <p>
                  Cuidamos de toda a parte burocrática, encargos trabalhistas e gestão de benefícios, para que você possa focar 100% no sucesso do seu produto.
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
                Monte seu Squad Agora
              </h3>
              <p className="text-brand-text/60 text-center mb-10 font-light leading-relaxed">
                Temos profissionais de diversas stacks prontos para embarcar no seu desafio.
              </p>
              <Link 
                to="/contato"
                className="w-full py-4 bg-brand-primary text-white font-black rounded-md tracking-widest hover:bg-brand-accent transition-all text-center block uppercase text-sm"
              >
                FALE CONOSCO
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">
              Vantagens do Outsourcing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Agilidade na Contratação",
                description: "Acelere o setup do projeto com profissionais prontos para começar a codar.",
                icon: Zap
              },
              {
                title: "Redução de Custos",
                description: "Economize com encargos, equipamentos e processos de desligamento.",
                icon: TrendingDown
              },
              {
                title: "Flexibilidade Escalável",
                description: "Aumente ou reduza o tamanho da equipe de acordo com a demanda do projeto.",
                icon: Maximize
              },
              {
                title: "Foco no Core Business",
                description: "Deixe a burocracia de RH conosco e foque inteiramente na estratégia do seu negócio.",
                icon: Target
              }
            ].map((vantagem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg/40 p-10 rounded-xl border border-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 group"
              >
                <div className="mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                  <vantagem.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">
                  {vantagem.title}
                </h3>
                <p className="text-brand-text/60 leading-relaxed text-lg font-light">
                  {vantagem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outsourcing;
