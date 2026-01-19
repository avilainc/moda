'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-gray-900">
                Mais de 300 mil notas emitidas/mês
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Gestão que{' '}
              <span className="text-gradient">veste sua loja</span> pra crescer de
              verdade
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0">
              Menos retrabalho, mais foco no cliente. Sistema pronto pra moda varejista, com controle de tamanho, cores e fluxo de caixa integrado. 
              Easy4me
            </p>

            {/* Transformation */}
            <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl mx-auto lg:mx-0 font-semibold">
              Do caixa bagunçado ao controle total em dias. Veja resultados reais em menos tempo do que imagina.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#trial"
                  className="btn-primary group inline-flex items-center space-x-2 no-underline"
                >
                  <span>Testar Grátis por 7 Dias</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#demo" className="btn-secondary no-underline">
                  Ver Demonstração
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">300k+</p>
                <p className="text-sm text-gray-700">Notas Emitidas/Mês</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">1.5k+</p>
                <p className="text-sm text-gray-700">Lojas Atendidas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm text-gray-700">Uptime</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative aspect-square rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-luxury"
              >
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-gray-400">
                        Easy4me
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Interface moderna e intuitiva
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -top-10 -left-10 bg-white rounded-2xl shadow-luxury p-4 w-48"
              >
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Vendas Hoje
                </p>
                <p className="text-3xl font-bold text-gradient">R$ 12.459</p>
                <p className="text-xs text-green-600 mt-1">↑ 23% vs ontem</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-luxury p-4 w-48"
              >
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Estoque Atualizado
                </p>
                <p className="text-3xl font-bold text-gradient">847</p>
                <p className="text-xs text-blue-600 mt-1">Itens disponíveis</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
