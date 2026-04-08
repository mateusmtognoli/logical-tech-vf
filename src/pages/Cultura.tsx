import { motion } from "motion/react";
import { Lightbulb, Handshake, Target, Sparkles } from "lucide-react";

const Cultura = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/cultura.jpg" 
            alt="Nossa Cultura" 
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
              NOSSA CULTURA
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/70 mt-6 font-light max-w-3xl leading-relaxed">
              Somos movidos pela inovação, orientados por dados e apaixonados por pessoas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-24 bg-brand-text">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-bg mb-8 uppercase">
                Quem Somos
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-brand-bg/60 font-light leading-relaxed">
                <p>
                  A Logical Tech nasceu com o propósito de conectar os melhores profissionais de tecnologia do mercado às empresas que estão transformando o mundo através do software.
                </p>
                <p>
                  Não somos apenas uma consultoria de TI. Somos parceiros estratégicos de inovação. Acreditamos que a tecnologia só alcança seu potencial máximo quando impulsionada por mentes brilhantes, trabalhando em um ambiente que valoriza a criatividade, o respeito e o crescimento contínuo.
                </p>
                <p>
                  Nosso time é formado por especialistas em gestão de pessoas e engenharia de software, garantindo um olhar técnico e humanizado para cada desafio de negócio.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-brand-primary/20"
            >
              <img 
                src="/img/nossa-cultura.webp" 
                alt="Time Logical Tech" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">
              Nossos Valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Inovação Contínua",
                description: "Buscamos constantemente novas formas de resolver problemas, adotando tecnologias de ponta e metodologias ágeis.",
                icon: Lightbulb
              },
              {
                title: "Foco nas Pessoas",
                description: "Entendemos que por trás de todo código e algoritmo, existem pessoas. Valorizamos o bem-estar e o crescimento de cada talento.",
                icon: Handshake
              },
              {
                title: "Orientação a Resultados",
                description: "Nosso compromisso é com o sucesso do cliente. Entregamos soluções que geram impacto real e mensurável nos negócios.",
                icon: Target
              },
              {
                title: "Transparência",
                description: "Construímos relações de confiança baseadas na comunicação clara, ética e honestidade em todas as etapas.",
                icon: Sparkles
              }
            ].map((valor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg/40 p-10 rounded-xl border border-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 group"
              >
                <div className="mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                  <valor.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">
                  {valor.title}
                </h3>
                <p className="text-brand-text/60 leading-relaxed text-lg font-light">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cultura;
