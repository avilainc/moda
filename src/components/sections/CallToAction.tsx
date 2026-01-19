'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const CallToAction: React.FC = () => {
  const benefits = [
    'Teste grátis por 7 dias',
    'Sem cartão de crédito',
    'Cancele quando quiser',
    'Suporte completo incluído',
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading - mantido oculto visualmente mas presente para hierarquia */}
          <h2 className="sr-only">Comece sua transformação hoje</h2>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold">
              Oferta por tempo limitado
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Do caixa bagunçado ao{' '}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              controle total
            </span>{' '}
            em dias
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 1.500 lojas que já transformaram sua gestão com o
            Easy4me
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 text-left"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mx-auto"
          >
            <form className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Digite seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group no-underline"
              >
                <span>Começar Teste Grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>

            <p className="text-sm text-gray-300">
              Ao se inscrever, você concorda com nossos{' '}
              <a href="/termos" className="underline hover:text-white decoration-gray-300 hover:decoration-white">
                Termos de Uso
              </a>{' '}
              e{' '}
              <a href="/privacidade" className="underline hover:text-white">
                Política de Privacidade
              </a>
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-60"
          >
            <div className="text-center">
              <p className="text-sm text-gray-400">Certificado SSL</p>
              <p className="text-xs text-gray-500">Segurança Garantida</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">PCI Compliant</p>
              <p className="text-xs text-gray-500">Pagamentos Seguros</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">LGPD</p>
              <p className="text-xs text-gray-500">Dados Protegidos</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">ISO 27001</p>
              <p className="text-xs text-gray-500">Certificado</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
