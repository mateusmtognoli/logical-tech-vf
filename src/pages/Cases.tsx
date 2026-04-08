import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      title: "Transformação Digital - Fintech X",
      description: "Modernização completa da infraestrutura de pagamentos, reduzindo o tempo de processamento em 60% e aumentando a escalabilidade para 1M+ de transações diárias.",
      metrics: "60% mais rápido",
      icon: Zap,
      image: "https://picsum.photos/seed/fintech/800/600"
    },
    {
      title: "IA no Varejo - Gigante do E-commerce",
      description: "Implementação de sistema de recomendação baseado em IA que resultou em um aumento de 25% no ticket médio dos usuários.",
      metrics: "+25% Ticket Médio",
      icon: TrendingUp,
      image: "https://picsum.photos/seed/retail/800/600"
    },
    {
      title: "Outsourcing de Elite - HealthTech Y",
      description: "Estruturação de um time de 15 desenvolvedores sêniores em tempo recorde, acelerando o lançamento do produto em 4 meses.",
      metrics: "Time montado em 3 semanas",
      icon: Users,
      image: "https://picsum.photos/seed/health/800/600"
    }
  ];

  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/business/1920/1080" 
            alt="Cases de Sucesso" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-white uppercase">
              CASES DE SUCESSO
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/70 mt-6 font-light max-w-3xl leading-relaxed">
              Resultados reais para desafios complexos. Conheça como transformamos negócios através da tecnologia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24 bg-brand-text">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {cases.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold text-sm">
                      <item.icon size={16} />
                      {item.metrics}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-bg tracking-tight uppercase">
                    {item.title}
                  </h2>
                  <p className="text-xl text-brand-bg/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 text-brand-primary font-bold">
                    <CheckCircle2 size={20} />
                    <span>Projeto entregue com excelência</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-tight">
            Seu próximo case de sucesso começa aqui
          </h2>
          <p className="text-xl text-brand-text/60 mb-12 font-light">
            Estamos prontos para ajudar sua empresa a alcançar o próximo nível tecnológico.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/contato" 
              className="inline-block px-12 py-5 bg-brand-primary text-white font-black rounded-md tracking-widest hover:bg-brand-accent transition-all blue-glow"
            >
              FALE COM UM ESPECIALISTA
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
