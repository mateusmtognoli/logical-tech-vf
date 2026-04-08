import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Recruitment = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/equipe.png" 
            alt="Recrutamento" 
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
              RECRUTAMENTO
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/70 mt-6 font-light max-w-3xl leading-relaxed">
              Conectamos a sua empresa aos melhores profissionais de TI do mercado, garantindo fit técnico e cultural.
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
                Especialistas encontrando Especialistas
              </h2>
              <div className="space-y-8 text-lg md:text-xl text-brand-bg/80 font-light leading-relaxed">
                <p>
                  O mercado de tecnologia é extremamente competitivo e dinâmico. Encontrar o candidato ideal exige muito mais do que apenas buscar palavras-chave em currículos; exige uma compreensão profunda das stacks tecnológicas, das metodologias de trabalho e da cultura da sua empresa.
                </p>
                <p>
                  Nossa equipe de Tech Recruiters é formada por profissionais com background técnico, capazes de conduzir entrevistas aprofundadas e avaliar hard skills e soft skills com precisão.
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
                Otimize seu Processo Seletivo
              </h3>
              <p className="text-brand-text/60 text-center mb-10 font-light leading-relaxed">
                Reduza o tempo de contratação e diminua o turnover da sua equipe com recrutamento assertivo.
              </p>
              <Link 
                to="/contato"
                className="w-full py-4 bg-brand-primary text-white font-black rounded-md tracking-widest hover:bg-brand-accent transition-all text-center block uppercase text-sm"
              >
                SOLICITAR PROPOSTA
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">
              Como Funciona o Nosso Processo
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                number: "1",
                title: "Alinhamento de Perfil",
                description: "Entendemos profundamente os requisitos técnicos da vaga, o momento do projeto e a cultura da empresa."
              },
              {
                number: "2",
                title: "Hunting Especializado",
                description: "Utilizamos nossas redes exclusivas e ferramentas avançadas para mapear o mercado em busca dos talentos ocultos."
              },
              {
                number: "3",
                title: "Triagem e Entrevista Técnica",
                description: "Avaliamos as habilidades do candidato através de testes práticos e conversas aprofundadas sobre arquitetura e código."
              },
              {
                number: "4",
                title: "Apresentação de Shortlist",
                description: "Enviamos apenas os profissionais mais aderentes (Top 3), otimizando o tempo dos gestores de tecnologia da sua empresa."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 md:gap-12"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black">
                  {step.number}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight uppercase">
                    {step.title}
                  </h3>
                  <p className="text-brand-text/60 text-lg md:text-xl font-light leading-relaxed max-w-4xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
