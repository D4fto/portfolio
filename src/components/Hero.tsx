import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin} from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero-section min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="hero-intro space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block">
              <motion.div
                className="text-sm text-violet-400 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >Olá, mundo! 👋
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                Eu sou
                {" "}
                <motion.span
                  className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-fuchsia-400 bg-clip-text text-transparent animate-gradient"
                  initial={{ backgroundPosition: '0% 50%' }}
                  animate={{ backgroundPosition: '100% 50%' }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  >
                  Pedro Tunes
                </motion.span>
              </motion.h1>
              <div className="text-xl text-gray-300 mb-8">
                Desenvolvedor Full Stack
              </div>
            </div>
            <motion.a
              href="mailto:contatopedrotunes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Mail size={20} />
              Entrar em contato
            </motion.a>
            <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/D4fto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/D4fto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
          </motion.div>
          <motion.div
            className="backdrop-blur-lg rounded-3xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className='text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Sobre mim</h1>
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor Full Stack com foco em Backend, atuando com Node.js, TypeScript, Express e Prisma.
Experiência em modelagem de bancos PostgreSQL, consumo de APIs REST, autenticação JWT e deploy em AWS, Vercel e Render.
Atualmente cursando Informática para Internet na UTFPR-CM, com contato em C#, C++, Python e Java, sempre buscando escrever código limpo e escalável.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
