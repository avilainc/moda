'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ana Paula Silva',
      role: 'Proprietária',
      company: 'Boutique Elegance',
      content:
        'O Easy4me transformou completamente a gestão da minha loja. Agora consigo controlar estoque, vendas e financeiro em um só lugar. As vendas aumentaram 45% desde que implementamos!',
      rating: 5,
      image: '#',
    },
    {
      id: 2,
      name: 'Ricardo Mendes',
      role: 'Gerente Comercial',
      company: 'Moda & Estilo',
      content:
        'Impressionante! A emissão de notas fiscais que antes levava horas, agora é automática. O suporte é excepcional e sempre está disponível quando precisamos.',
      rating: 5,
      image: '#',
    },
    {
      id: 3,
      name: 'Juliana Costa',
      role: 'CEO',
      company: 'Fashion House',
      content:
        'A melhor decisão que tomamos foi migrar para o Easy4me. Os relatórios em tempo real nos ajudam a tomar decisões estratégicas com muito mais agilidade e precisão.',
      rating: 5,
      image: '#',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            O que nossos clientes{' '}
            <span className="text-gradient">estão dizendo</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Histórias reais de quem transformou sua gestão e aumentou resultados
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-luxury transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_: unknown, i: number) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-4 gap-8 p-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl text-white"
        >
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">98%</p>
            <p className="text-purple-100">Satisfação dos Clientes</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">1.5k+</p>
            <p className="text-purple-100">Lojas Ativas</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">300k+</p>
            <p className="text-purple-100">Notas Emitidas/Mês</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">24/7</p>
            <p className="text-purple-100">Suporte Disponível</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
