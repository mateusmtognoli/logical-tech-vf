import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o processo de recrutamento da Logical Tech?",
      a: "Nosso processo inicia com um alinhamento profundo com a sua liderança técnica. Depois, utilizamos nossas redes de hunting para mapear o mercado, aplicar testes e entrevistas técnicas, e por fim apresentamos apenas os top 3 candidatos mais alinhados à vaga e à cultura da empresa."
    },
    {
      q: "Vocês trabalham com todas as stacks de tecnologia?",
      a: "Sim, nossos tech recruiters são especialistas em diferentes ecossistemas (Java, .NET, Node.js, Python, Ruby, PHP), tecnologias de frontend (React, Angular, Vue), mobile (iOS, Android, Flutter, React Native), engenharia de dados, cloud, DevOps, QA, e perfis de liderança técnica e de produto."
    },
    {
      q: "Qual a diferença entre Outsourcing e Recrutamento (Hunting)?",
      a: "No Hunting (Recrutamento), nós encontramos o talento para ser contratado DIRETAMENTE pela sua empresa (CLT ou PJ). No Outsourcing (Alocação), o profissional é contratado pela Logical Tech, mas atua exclusivamente no seu projeto sob a sua gestão diária. Nós cuidamos de toda burocracia, equipamentos e retenção."
    },
    {
      q: "A Fábrica de Software faz a manutenção após a entrega?",
      a: "Sim. Oferecemos modelos de sustentação (SLA) para garantir que as aplicações desenvolvidas por nós (ou legados assumidos) continuem operando com alta disponibilidade, segurança e recebendo melhorias contínuas."
    },
    {
      q: "Atendem clientes fora de São Paulo?",
      a: "Atendemos empresas em todo o Brasil e globalmente (empresas LATAM, US e Europa) através de modelos 100% remotos, tanto em recrutamento, alocação ou desenvolvimento de software."
    }
  ];

  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/faq.png" 
            alt="FAQ" 
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
              FAQ
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/70 mt-6 font-light max-w-3xl leading-relaxed">
              Confira as principais informações sobre como podemos ajudar a sua empresa a crescer com a tecnologia certa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-brand-text">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-bg uppercase mb-4">
              Tem alguma pergunta rápida?
            </h2>
            <p className="text-brand-bg/60 text-lg font-light">
              Listamos abaixo as respostas para as perguntas mais comuns dos nossos clientes.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-surface border border-brand-primary/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between group transition-colors hover:bg-brand-primary/5"
                >
                  <span className="text-xl font-bold text-brand-text tracking-tight pr-8">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 text-brand-primary">
                    {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-brand-text/80 text-lg font-light leading-relaxed border-t border-brand-primary/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-brand-text">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-bg p-12 rounded-3xl border border-brand-primary/20 text-center shadow-2xl shadow-brand-primary/5"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
              Ainda tem dúvidas?
            </h3>
            <p className="text-brand-text/60 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Nossa equipe de especialistas está à disposição para bater um papo sem compromisso.
            </p>
            <Link 
              to="/contato"
              className="inline-block px-12 py-4 bg-brand-primary text-white font-black rounded-md tracking-widest hover:bg-brand-accent transition-all uppercase text-sm"
            >
              ENTRAR EM CONTATO
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
