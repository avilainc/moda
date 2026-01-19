'use client'

import { motion } from 'framer-motion'
import {
  Package,
  FileText,
  TrendingUp,
  Users,
  Clock,
} from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Package,
      title: 'Integra estoque + PDV + finanças num só painel',
      description:
        'Controle completo em uma única plataforma, eliminando a necessidade de múltiplos sistemas.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Emissão de NFC-e/NF-e automatizada',
      description:
        'Emita notas fiscais com um clique, garantindo conformidade fiscal em todos os estados.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Não perde tempo com retrabalho manual',
      description:
        'Automatize processos repetitivos e foque no que realmente importa: seus clientes.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Dados reais pra decidir o que vender mais',
      description:
        'Relatórios precisos para identificar tendências e otimizar seu mix de produtos.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Fácil pra toda equipe usar',
      description:
        'Interface intuitiva que qualquer membro da equipe pode aprender rapidamente.',
      color: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Benefícios que <span className="text-gradient">convertem</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Funcionalidades pensadas especialmente para o varejo de moda. Menos
            retrabalho, mais foco no cliente.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-luxury transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Pronto para transformar sua gestão?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
