import { motion } from "motion/react";
import { MapPin, Mail, Phone, Check } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-text min-h-screen pt-44 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-brand-bg uppercase tracking-tighter mb-8">
              Vamos conversar!
            </h1>
            <p className="text-xl text-brand-bg/60 font-light leading-relaxed mb-12 max-w-lg">
              Seja para contratar talentos, iniciar um projeto de software ou alocar uma squad ágil, nossa equipe está preparada para apresentar a melhor solução.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-brand-bg font-bold text-lg uppercase tracking-tight mb-1">Nosso Escritório</h3>
                  <p className="text-brand-bg/60 font-light">São Paulo, SP<br />Brasil</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-brand-bg font-bold text-lg uppercase tracking-tight mb-1">Email</h3>
                  <p className="text-brand-bg/60 font-light">contato@logicaltech.com.br</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-brand-bg font-bold text-lg uppercase tracking-tight mb-1">Telefone / WhatsApp</h3>
                  <p className="text-brand-bg/60 font-light">+55 (11) 99999-9999</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-brand-bg/5 p-10 rounded-3xl border border-brand-primary/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-brand-bg/70 text-sm font-medium uppercase tracking-widest mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Digite seu nome"
                  required
                  className="w-full bg-brand-text border border-brand-primary/10 rounded-lg px-4 py-3 text-brand-bg placeholder:text-brand-bg/40 focus:outline-none focus:border-brand-primary/40 transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brand-bg/70 text-sm font-medium uppercase tracking-widest mb-2">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="nome@empresa.com.br"
                    required
                    className="w-full bg-brand-text border border-brand-primary/10 rounded-lg px-4 py-3 text-brand-bg placeholder:text-brand-bg/40 focus:outline-none focus:border-brand-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-brand-bg/70 text-sm font-medium uppercase tracking-widest mb-2">Telefone / Celular</label>
                  <input 
                    type="tel" 
                    placeholder="(11) 90000-0000"
                    required
                    className="w-full bg-brand-text border border-brand-primary/10 rounded-lg px-4 py-3 text-brand-bg placeholder:text-brand-bg/40 focus:outline-none focus:border-brand-primary/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brand-bg/70 text-sm font-medium uppercase tracking-widest mb-2">Qual o seu interesse principal?</label>
                <select 
                  required
                  className="w-full bg-brand-text border border-brand-primary/10 rounded-lg px-4 py-3 text-brand-bg focus:outline-none focus:border-brand-primary/40 transition-colors appearance-none"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="software">Desenvolvimento de Software</option>
                  <option value="outsourcing">Outsourcing / Alocação</option>
                  <option value="recrutamento">Recrutamento e Seleção</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-brand-bg/70 text-sm font-medium uppercase tracking-widest mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos ajudar sua empresa?"
                  required
                  className="w-full bg-brand-text border border-brand-primary/10 rounded-lg px-4 py-3 text-brand-bg placeholder:text-brand-bg/40 focus:outline-none focus:border-brand-primary/40 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-4 text-white font-black rounded-md tracking-widest transition-all uppercase text-sm flex items-center justify-center gap-2 ${
                  submitted 
                    ? "bg-green-600 cursor-default" 
                    : "bg-brand-primary hover:bg-brand-accent"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={18} strokeWidth={3} /> Mensagem Enviada
                  </>
                ) : (
                  "ENVIAR MENSAGEM"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
