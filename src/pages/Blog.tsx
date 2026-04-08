import { motion } from "motion/react";

const Blog = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/blog.jpg" 
            alt="Blog" 
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
              BLOG
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/70 mt-6 font-light max-w-3xl leading-relaxed">
              Conteúdo criado por especialistas para impulsionar a sua carreira e o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 bg-brand-text">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "O Futuro da IA no Desenvolvimento", date: "20 Mar 2026", excerpt: "Como as novas ferramentas de IA estão mudando a forma como escrevemos código.", image: "/img/ia.jpg" },
              { title: "Arquitetura de Microsserviços em 2026", date: "15 Mar 2026", excerpt: "Melhores práticas para escalar sistemas complexos e distribuídos.", image: "/img/workflow.png" },
              { title: "Cultura de Engenharia na Logical Tech", date: "10 Mar 2026", excerpt: "Como construímos times de alta performance e inovação constante.", image: "/img/ecosystem.jpg" },
            ].map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg/5 p-8 border border-brand-primary/10 hover:border-brand-primary transition-all group overflow-hidden rounded-2xl"
              >
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs text-brand-primary uppercase tracking-widest mb-4 block">{post.date}</span>
                <h3 className="text-2xl font-bold tracking-tighter mb-4 text-brand-bg">{post.title}</h3>
                <p className="text-brand-bg/60 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-brand-primary font-bold hover:text-brand-accent transition-colors cursor-pointer">
                  Ler mais →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
