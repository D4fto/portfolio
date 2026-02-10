import React from 'react';
import { motion } from 'framer-motion';
import { contacts } from '../data/contacts';
import './Contact.css';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contato" className="contact-section px-6 bg-black/20">
      <div className='max-w-7xl mx-auto'>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-violet-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contatos
        </motion.h1>
        <motion.div
          className="contacts-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {contacts.map((contact) => (
            <motion.a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              key={contact.type}
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <i className={`ti ${contact.icon}`} />
              </motion.span>
              <h2>{contact.label}</h2>
              <p>{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
